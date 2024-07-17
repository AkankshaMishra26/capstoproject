import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Jobfinder</div>
      <nav>
        <Link to="/login" className={styles.loginButton}>Login</Link>
        <Link to="/register" className={styles.registerButton}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;











