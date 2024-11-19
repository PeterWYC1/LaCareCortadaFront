import React, { useEffect, useState } from 'react';
import { useUser } from '../context/endpoints.jsx';
import styles from '../Styles/Models.module.css'; // Asegúrate de tener el archivo de estilos adecuado
import { useNavigate } from "react-router-dom"; // Para navegación si necesitas redireccionar

const Models = () => {
  const { getAllModels } = useUser(); // Usamos la función para obtener los modelos
  const [models, setModels] = useState([]);  // Estado para almacenar los modelos obtenidos
  const [selectedCategory, setSelectedCategory] = useState('All'); // Si tienes categorías, puedes usar esto
  const navigate = useNavigate(); // Si necesitas navegar a detalles de un modelo

  useEffect(() => {
    // Obtener todos los modelos cuando el componente se monta
    const fetchModels = async () => {
      const fetchedModels = await getAllModels();
      if (fetchedModels) {
        setModels(fetchedModels);  // Guardamos los modelos en el estado
      }
    };
    fetchModels();
  }, [getAllModels]);  // Se ejecuta cada vez que se actualiza la función getAllModels

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);  // Lógica para filtrar modelos por categoría, si es necesario
  };

  return (
    <div className={styles.container}>
      <h1>Model Directory</h1>
      
      {/* Si tienes categorías, puedes agregar un filtro */}
      <div className={styles.filter}>
        <label htmlFor="category-filter">Filter by category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.filterSelect}
        >
          <option value="All">All</option>
          <option value="Fashion">Fashion</option>
          <option value="Fitness">Fitness</option>
          <option value="Editorial">Editorial</option>
          {/* Agrega más opciones si tienes categorías en tu base de datos */}
        </select>
      </div>

      {/* Aquí se muestran los modelos */}
      <div className={styles.modelList}>
        {models.length > 0 ? (
          models.map((model, index) => (
            <div key={index} className={styles.modelCard}>
              <img className={styles.modelPhoto} src={model.photos} alt={model.name} />
              <h2 className={styles.modelName}>{model.name}</h2>
              <a className={styles.portfolioButton} href={model.portfolio}>View Portfolio</a>
              {/* Si necesitas, también puedes agregar lógica para navegar a una página de detalles */}
            </div>
          ))
        ) : (
          <p>No models found</p>
        )}
      </div>
    </div>
  );
}

export default Models;
