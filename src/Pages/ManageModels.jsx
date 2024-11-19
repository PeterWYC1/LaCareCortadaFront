import React, { useState, useEffect } from 'react';
import styles from '../Styles/ManageModels.module.css';
import { useUser } from '../context/endpoints.jsx';

function ManageModels() {
  const { addModel, getAllModels, updateModel } = useUser();
  const [models, setModels] = useState([]);
  const [editModel, setEditModel] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    photos: '',
    portfolio: '',
    booking_info: ''
  });

  // Fetch models from backend
  useEffect(() => {
    const fetchModels = async () => {
      const allModels = await getAllModels();
      setModels(allModels);
    };
    fetchModels();
  }, [getAllModels]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editModel) {
        // Update model logic
        const updatedModel = await updateModel(editModel.id, formData);
        setModels(models.map(model => model.id === editModel.id ? updatedModel : model));
      } else {
        const newModel = await addModel(
          formData.name,
          formData.photos,
          formData.portfolio,
          formData.booking_info
        );
        setModels([...models, newModel]);
      }
      setFormData({ name: '', photos: '', portfolio: '', booking_info: '' });
      setEditModel(null);
    } catch (error) {
      console.error('Error saving model:', error);
    }
  };

  const handleEdit = (model) => {
    setEditModel(model);
    setFormData({
      name: model.name,
      photos: model.photos,
      portfolio: model.portfolio,
      booking_info: model.booking_info
    });
  };

  const handleDelete = (id) => {
    // Implement DELETE request logic here
    console.log('Deleting model...');
  };

  return (
    <div className={styles.container}>
      <h1>Manage Models</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder='Name'
            required
          />
        </label>
        <label className={styles.label}>
          Photos URL
          <input
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
            className={styles.input}
            placeholder='Photos URL'
            required
          />
        </label>
        <label className={styles.label}>
          Portfolio URL
          <input
            type="text"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className={styles.input}
            placeholder='Portfolio URL'
            required
          />
        </label>
        <label className={styles.label}>
          Booking Information
          <textarea
            name="booking_info"
            value={formData.booking_info}
            onChange={handleChange}
            className={styles.textarea}
            placeholder='Booking Information'
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          {editModel ? 'Update Model' : 'Add Model'}
        </button>
      </form>
      <div className={styles.modelsList}>
  {models.map(model => (
    <div key={model.id} className={styles.modelItem}>  {/* Aquí es donde agregas el 'key' */}
      <h2>{model.name}</h2>
      <p><strong>Photos URL:</strong> {model.photos}</p>
      <p><strong>Portfolio URL:</strong> {model.portfolio}</p>
      <p><strong>Booking Information:</strong> {model.booking_info}</p>
      <button onClick={() => handleEdit(model)} className={styles.editButton}>Edit</button>
      <button onClick={() => handleDelete(model.id)} className={styles.deleteButton}>Delete</button>
    </div>
  ))}
</div>

    </div>
  );
}

export default ManageModels;