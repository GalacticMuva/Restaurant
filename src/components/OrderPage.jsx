import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './OrderPage.css';

const OrderPage = () => {
  const location = useLocation();
  const [customerName, setCustomerName] = useState('');
  const [orderText, setOrderText] = useState(''); // React state name
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (location.state && location.state.item) {
      setOrderText(`I would like to order the ${location.state.item}`);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: customerName,
          order_details: orderText // Maps React state to your specific DB column
        }
      ]);

    if (error) {
      console.error('Error saving order:', error);
      alert('Something went wrong. Please try again.');
    } else {
      setMessage('Success! Your order has been placed.');
      setCustomerName('');
      setOrderText('');
    }
  };

  return (
    <div className="order-container">
      <h1>Place Your Order</h1>
      {message && <p className="success-banner">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Order Details:</label>
          <textarea
            value={orderText}
            onChange={(e) => setOrderText(e.target.value)}
            required />
        </div>

        <button type="submit" className="submit-btn">Submit Order</button>
      </form>
      <div className="form-footer">
        <Link to="/menu" className="back-link">← Back to Menu</Link>
      </div>
    </div>
    
  );
};

export default OrderPage;