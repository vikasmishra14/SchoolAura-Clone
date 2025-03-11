import React from 'react'; 
import { FaUniversity } from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
 <div className='nav-logo'>
  <a href="/">
    <img
      src="https://www.schoolaura.com/Content/assets/images/logo_school.png"
      alt="React logo"
      className="logo-img"
    />
  </a>
  <div className="logo-cloud"></div>
</div>

      <div className="navbar-links">
        <ul className="menuItems">
          <li><a href="#">Home</a></li>
          <li><a href="#">Exam Solution</a></li>
          <li><a href="#">Online Study</a></li>
          <li><a href="#">Tutor Solution</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact Us</a></li>
          <li className='university'><a href="#"><FaUniversity/> School Management</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;  // Correct export
