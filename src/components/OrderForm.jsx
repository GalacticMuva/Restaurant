import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const OrderForm = () => { 
  const location = useLocation();
  const [customerName, setCustomerName] = useState('');
  const [orderText, setOrderText] = useState(''); 
const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    if (location.state && location.state.item) {
      setOrderText(`I would like to order the ${location.state.item}`);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('orders')
      .insert([{ customer_name: customerName, order_details: orderText }]);

    if (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    } else {
      setIsSubmitted(true);
    }
  };

if (isSubmitted) {
    return (
      <div className="card shadow-sm p-5 text-center">
        <h2 className="text-success mb-3">Order Received! ✅</h2>
        <p className="lead">Thank you, <strong>{customerName}</strong>.</p>
        <p className="text-muted">Your order for "{orderText}" has been sent to the kitchen.</p>
        <div className="mt-4">
          <Link to="/menu" className="btn btn-primary px-4">Order Something Else</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm p-4">
      <h2 className="text-center mb-4">Place Your Order</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Order Details:</label>
          <textarea
            className="form-control"
            rows="3"
            value={orderText}
            onChange={(e) => setOrderText(e.target.value)}
            required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Order</button>
      </form>
      <div className="mt-3 text-center">
        <Link to="/menu" className="text-decoration-none">← Back to Menu</Link>
      </div>
    </div>
  );
};
