import React, { useEffect, useState } from 'react';
import { useUser } from '../context/endpoints.jsx'; // Asegúrate de que este path sea correcto
import styles from '../Styles/PhotoSales.module.css';

const PhotoSales = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { getAllPhotos } = useUser();  // Usamos la función getAllPhotos del contexto
  const [photoSales, setPhotoSales] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const fetchedPhotos = await getAllPhotos();  // Llamamos a la función del contexto
      if (fetchedPhotos && fetchedPhotos.length > 0) {
        setPhotoSales(fetchedPhotos);  // Guardamos las fotos en el estado
      } else {
        // Si no hay fotos, puedes manejarlo de alguna forma
        setPhotoSales([]);  // De todas formas, aseguramos que el estado esté vacío
      }
    };
    fetchPhotos();
  }, [getAllPhotos]);  // Se ejecuta cuando se carga la función `getAllPhotos`

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtramos las fotos por categoría
  const filteredPhotos = selectedCategory === 'All'
    ? photoSales
    : photoSales.filter(photo => photo.category === selectedCategory);

  return (
    <div className={styles.container}>
            <h1 className={styles.pageTitle}>Photo Sales</h1>

      <div className={styles.filter}>
        <label htmlFor="category-filter">Filter by category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.filterSelect}
        >
          <option value="All">All</option>
          <option value="Red Carpet">Red Carpet</option>
          <option value="Runway">Runway</option>
          <option value="Urban Fashion">Urban Fashion</option>
          <option value="Backstage">Backstage</option>
          <option value="Glamour">Glamour</option>
          <option value="Beach Fashion">Beach Fashion</option>
        </select>
      </div>
      <div className={styles.photoList}>
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo, index) => (
            <div key={index} className={styles.photoItem}>
              <h2>{photo.title}</h2>
              <p>{photo.description}</p>
              <p><strong>Price (Digital Download):</strong> ${photo.priceDigital}</p>
              <p><strong>Price (Physical Print):</strong> ${photo.pricePrint}</p>
              <p><strong>Categories:</strong> {photo.categories}</p>
              <p><strong>Tags:</strong> {photo.tags}</p>
              <p><strong>Photographer:</strong> {photo.photographer}</p>

              <div className={styles.formatSelect}>
                <p><strong>Select Format:</strong></p>
                <button
                  className={`${styles.formatButton} ${selectedCategory === 'digital' ? styles.selected : ''}`}
                >
                  Digital
                </button>
                <button
                  className={`${styles.formatButton} ${selectedCategory === 'print' ? styles.selected : ''}`}
                >
                  Print
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No photos found</p>
        )}
      </div>
    </div>
  );
}

export default PhotoSales;
