import react from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div style={styles.title}>
        <h1>BRAND</h1>
        <button className={styles.btn}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about </a>
        </li>
        <li>
          <a href="#">services </a>
        </li>
        <li>
          <a href="#">pricing </a>
        </li>
        <li>
          <a href="#">Contact </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
