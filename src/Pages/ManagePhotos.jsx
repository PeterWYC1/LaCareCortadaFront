import React, { useEffect, useState } from 'react';
import { useUser } from '../context/endpoints.jsx';
import styles from '../Styles/ManagePhotos.module.css';

function ManagePhotos() {
  const { getAllPhotos, addPhoto, updatePhoto, getPhotoById } = useUser(); // Accede a las funciones del contexto
  const [photos, setPhotos] = useState([]);
  const [editPhoto, setEditPhoto] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    // Obtener todas las fotos cuando se carga el componente
    const fetchPhotos = async () => {
      const photosData = await getAllPhotos();
      if (photosData) {
        setPhotos(photosData);
      }
    };

    fetchPhotos();
  }, [getAllPhotos]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const photoData = {
      title: formData.title,
      description: formData.description, // Añadir la descripción
      digital_price: formData.digital_price, // Añadir el precio digital
      physical_price: formData.physical_price, // Añadir el precio físico
      categories: formData.categories, // Añadir categorías
      tags: formData.tags, // Añadir tags
      available_formats: formData.available_formats, // Añadir formatos disponibles
      photographer: formData.photographer, // Añadir fotógrafo
    };

    if (editPhoto) {
      // Si estamos editando una foto, actualizamos
      const updatedPhoto = await updatePhoto(editPhoto.id, photoData);
      if (updatedPhoto) {
        setPhotos(photos.map(photo =>
          photo.id === editPhoto.id ? updatedPhoto : photo
        ));
      }
    } else {
      // Si estamos creando una nueva foto
      const newPhoto = await addPhoto(photoData);
      if (newPhoto) {
        setPhotos([...photos, newPhoto]);
      }
    }

    setFormData({
      title: '',
      price: '',
      image: '',
      description: '',
      digital_price: '',
      physical_price: '',
      categories: '',
      tags: '',
      available_formats: '',
      photographer: ''
    });
    setEditPhoto(null);
};

  const handleEdit = (photo) => {
    setEditPhoto(photo);
    setFormData({
      title: photo.title,
      price: photo.price,
      image: photo.image,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/photos/${id}`);
      if (response.data) {
        setPhotos(photos.filter(photo => photo.id !== id));
      }
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Manage Photos</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Photo Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
            placeholder="Photo Title"
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
            placeholder="Photo Description"
          />
        </label>

        <label className={styles.label}>
          Digital Price
          <input
            type="text"
            name="digital_price"
            value={formData.digital_price}
            onChange={handleChange}
            className={styles.input}
            placeholder="Photo Digital Price"
          />
        </label>

        <label className={styles.label}>
          Physical Price
          <input
            type="text"
            name="physical_price"
            value={formData.physical_price}
            onChange={handleChange}
            className={styles.input}
            placeholder="Photo Physical Price"
          />
        </label>

        <label className={styles.label}>
          Categories
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className={styles.input}
            placeholder="Photo Categories"
          />
        </label>

        <label className={styles.label}>
          Tags
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className={styles.input}
            placeholder="Photo Tags"
          />
        </label>

        <label className={styles.label}>
          Available Formats
          <input
            type="text"
            name="available_formats"
            value={formData.available_formats}
            onChange={handleChange}
            className={styles.input}
            placeholder="Photo Available Formats"
          />
        </label>

        <label className={styles.label}>
          Photographer
          <input
            type="text"
            name="photographer"
            value={formData.photographer}
            onChange={handleChange}
            className={styles.input}
            placeholder="Photographer Name"
          />
        </label>

        <button type="submit" className={styles.button}>
          {editPhoto ? 'Update Photo' : 'Add Photo'}
        </button>
      </form>
      <div className={styles.photosList}>
        {photos.map(photo => (
          <div key={photo.id} className={styles.photoItem}>
            <h2>{photo.title}</h2>
            <p><strong>Price:</strong> {photo.price}</p>
            <img src={photo.image} alt={photo.title} className={styles.image} />
            <button onClick={() => handleEdit(photo)} className={styles.editButton}>Edit</button>
            <button onClick={() => handleDelete(photo.id)} className={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagePhotos;
