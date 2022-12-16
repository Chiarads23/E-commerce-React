import React from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../../Styles/Layout/Search.module.scss";
import logo from "../../../assets/logo.png";

const Search = () => {
  // window.addEventListener('scroll', function () {
  //   const search = document.querySelector('.search')
  //   search.classList.toggle('active', window.scrollY > 100)
  // })
  return (
    <section className={styles.search}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={styles.searchBox}>
        <FaSearch />
        <input type="text" placeholder="Search your item here..." />
        <span>All categories</span>
      </div>
      <div className={styles.icon}>
        <FaUser />
        <Link className={styles.cart}to="/cart">
          <FaShoppingBag />
          <span>0</span>
        </Link>
      </div>
    </section>
  );
};

export default Search;
