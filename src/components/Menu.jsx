import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*');

      if (error) {
        console.error('Error fetching menu:', error);
      } else {
        setMenuItems(data);
      }
    };
    fetchMenu();
  }, []);

  const handleOrderClick = (itemName) => {
    navigate('/order', { state: { item: itemName } });
  };

  const renderCategory = (title, items) => (
    <div className="mb-5">
      <h2 className="text-primary border-bottom pb-2 mb-4">{title}</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={item.image_url} 
                className="card-img-top" 
                alt={item.name} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">${item.price}</p>
                <button 
                  className="btn btn-outline-primary mt-auto" 
                  onClick={() => handleOrderClick(item.name)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <h1 className="text-center mb-5">Our Menu</h1>
      {renderCategory("Breakfast", menuItems.filter(i => i.category === 'Breakfast'))}
      {renderCategory("Lunch", menuItems.filter(i => i.category === 'Lunch'))}
      {renderCategory("Dinner", menuItems.filter(i => i.category === 'Dinner'))}
      {renderCategory("Beverages", menuItems.filter(i => i.category === 'Beverages'))}
    </>
  );
};

export default Menu;