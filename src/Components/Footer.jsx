import styles from '../Styles/Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h3>About Us</h3>
        <p>Our brand manages an elite roster of models who are the face of La Care Cortada across the globe, dominating fashion events, campaigns, and social media. We offer a full range of makeup products that speak to the individuality and boldness of our customers.</p>
      </div>
      <div className={styles.footerRight}>
        <Link to="/contact-us" className={styles.linkButton}>Contact Us</Link>
      </div>
    </footer>
  );
}

export default Footer;
