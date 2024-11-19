import React, { useState } from 'react';
import styles from '../Styles/ManageMemberships.module.css';

const initialMemberships = [
  { id: 1, name: 'Basic Membership', description: 'Access to basic content and discounts.' },
  { id: 2, name: 'Premium Membership', description: 'Includes all basic benefits plus premium content.' },
  { id: 3, name: 'Elite Membership', description: 'All premium benefits plus exclusive access and discounts.' },
];

function ManageMemberships() {
  const [memberships, setMemberships] = useState(initialMemberships);
  const [editMembership, setEditMembership] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMembership) {
      setMemberships(memberships.map(membership =>
        membership.id === editMembership.id ? { ...editMembership, ...formData } : membership
      ));
    } else {
      setMemberships([...memberships, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: '', description: '' });
    setEditMembership(null);
  };

  const handleEdit = (membership) => {
    setEditMembership(membership);
    setFormData({
      name: membership.name,
      description: membership.description,
    });
  };

  const handleDelete = (id) => {
    setMemberships(memberships.filter(membership => membership.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Manage Memberships</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Membership Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Membership Name"
          />
        </label>
        <label className={styles.label}>
          Description
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.input}
            placeholder="Description"
          />
        </label>
        <button type="submit" className={styles.button}>
          {editMembership ? 'Update Membership' : 'Add Membership'}
        </button>
      </form>
      <div className={styles.membershipList}>
        {memberships.map(membership => (
          <div key={membership.id} className={styles.membershipTier}>
            <h2>{membership.name}</h2>
            <p>{membership.description}</p>
            <button onClick={() => handleEdit(membership)} className={styles.editButton}>Edit</button>
            <button onClick={() => handleDelete(membership.id)} className={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageMemberships;
