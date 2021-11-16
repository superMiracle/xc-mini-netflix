import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.title} tabIndex={0}>
        <h2>Mini Netflix</h2>
      </Link>
    </header>
  );
};

export default Header;
