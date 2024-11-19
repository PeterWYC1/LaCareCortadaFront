// src/pages/AdminDashboard.jsx

import { Link } from 'react-router-dom'; // Importar Link para navegación
import styles from '../Styles/AdminDashboard.module.css';

function AdminDashboard() {
  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <div className={styles.dashboard}>
        <Link to="/manage-models" className={styles.section}>
          <h2 className={styles.sectionTitle}>Manage Models</h2>
        </Link>
        <Link to="/manage-products" className={styles.section}>
          <h2 className={styles.sectionTitle}>Manage Products</h2>
        </Link>
        <Link to="/manage-events" className={styles.section}>
          <h2 className={styles.sectionTitle}>Manage Events</h2>
        </Link>
        <Link to="/manage-photos" className={styles.section}>
          <h2 className={styles.sectionTitle}>Manage Photos</h2>
        </Link>
        <Link to="/manage-memberships" className={styles.section}>
          <h2 className={styles.sectionTitle}>Manage Memberships</h2>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
