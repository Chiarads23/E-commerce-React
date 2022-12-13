import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBorderAll, FaTimes, FaBars } from "react-icons/fa";
import styles from "../../Styles/Layout/Navbar.module.scss";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.categories}>
          <FaBorderAll />
          <h4>
            Categories <FaChevronDown />
          </h4>
        </div>
        <div className={styles.navLink}>
          <ul className= {styles.list}>
          
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/pages">Pages </Link>
            </li>
            <li>
              <Link to="/user">User account </Link>
            </li>
            <li>
              <Link to="/vendor">Vendor account </Link>
            </li>
            <li>
              <Link to="/track">Track my order</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
