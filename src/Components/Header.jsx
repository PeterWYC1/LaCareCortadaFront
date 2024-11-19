import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../Styles/Menu.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
      <div className={styles.menuToggle} onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link to="/" className={styles.navLink}>Home</Link></li>
        <li><Link to="/models" className={styles.navLink}>Models</Link></li>
        <li><Link to="/products" className={styles.navLink}>Products</Link></li>
        <li><Link to="/events" className={styles.navLink}>Events</Link></li>
        <li><Link to="/photos" className={styles.navLink}>Photo Sales</Link></li>
        <li><Link to="/memberships" className={styles.navLink}>Memberships</Link></li>
      </ul>
      <div className={styles.rightIcons}>
        <Link to="/admin" className={styles.navLink}>
          <span className={`${styles.icon} ${styles.adminIcon}`} />
        </Link>
        <Link to="/cart" className={styles.navLink}>
          <span className={`${styles.icon} ${styles.cartIcon}`} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
