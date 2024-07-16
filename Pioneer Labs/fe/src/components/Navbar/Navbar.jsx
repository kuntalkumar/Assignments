// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='parent'> 
     <button className="toggle-btn" onClick={toggleMenu}>
    ☰
  </button>

    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    
    <div id='container'>
      <div>

      <ul className="menu">
        <li>Home</li>
        <li>Organization</li>
        <li>Assets</li>
        <li>Trade</li>
        <li>History</li>
        <li>Wallet</li>
      </ul>
      </div>
<div>
      <ul className='bottom_menu'>
        <li>Notification</li>
        <li>Support</li>
        <li>Setting</li>
      </ul>

      </div>

      <div className='userDetails'>
        <h6>Kuntal Kumar</h6>
        <p>kkuntal75@gmail.com</p>
      </div>

      </div>



    </div>
    </div>

  );
}

export default Sidebar;
