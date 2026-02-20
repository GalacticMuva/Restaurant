import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import './Menu.css';

const Menu = () => {
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
  
const breakfastItems = menuItems.filter(item => item.category === 'Breakfast');
const lunchItems = menuItems.filter(item => item.category === 'Lunch');
const dinnerItems = menuItems.filter(item => item.category === 'Dinner');
const drinkItems = menuItems.filter(item => item.category === 'Beverages');

return (
  <div className="menu-container">
    <h1>Our Menu</h1>

{/* Breakfast Section */}
    <section>
      <h2>Breakfast</h2>
      <div className="grid">
        {breakfastItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </section>

{/* Lunch Section */}
    <section>
      <h2>Lunch</h2>
      <div className="grid">
        {lunchItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </section>

{/* Dinner Section */}
    <section>
      <h2>Dinner</h2>
      <div className="grid">
        {dinnerItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </section>

{/* Drinks Section */}
    <section>
      <h2>Beverages & Drinks</h2>
      <div className="grid">
        {drinkItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  </div>

);

};

export default Menu;