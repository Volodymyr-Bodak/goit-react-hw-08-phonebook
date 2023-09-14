import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; 

const Home = () => {
  return (
    <div>
      <nav className={styles.navcontainer}>
        <ul className={styles.navlist}>
          <li className={styles.navitem}>
            <Link to="/login" className={styles.navlink}>
              Login
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link to="/register" className={styles.navlink}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.maincontainer}>
        <h2 className={styles.mainheading}>Welcome to the Home Page</h2>
        <p className={styles.mainparagraph}>
          This is the home page of your application.
        </p>
      </div>
    </div>
  );
};

export default Home;
