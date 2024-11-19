import React, { useEffect, useState } from 'react';
import { useUser } from '../context/endpoints.jsx';
import styles from '../Styles/Products.module.css';
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { getAllProducts } = useUser();  // Usamos la función para obtener los productos
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener todos los productos cuando el componente se monta
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProducts();
      if (fetchedProducts) {
        setProductos(fetchedProducts);  // Guardamos los productos en el estado
      }
    };
    fetchProducts();
  }, [getAllProducts]);  // Se ejecuta cada vez que se actualiza la función getAllProducts

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtrar los productos por categoría
  const filteredProducts = selectedCategory === 'All'
    ? productos
    : productos.filter(product => product.category === selectedCategory);

  return (
    <div className={styles.container}>
      <h1>Makeup Products</h1>
      <div className={styles.filter}>
        <label htmlFor="category-filter">Filter by category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.filterSelect}
        >
          <option value="All">All</option>
          <option value="Lipsticks">Lipsticks</option>
          <option value="Foundations">Foundations</option>
          <option value="Eye Shadows">Eye Shadows</option>
          <option value="Powders">Powders</option>
          <option value="Bronzers">Bronzers</option>
          <option value="Brows">Brows</option>
        </select>
      </div>
      <div className={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <img className={styles.productImage} src={product.image} alt={product.name} />
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Products;
