import React, { useState, useEffect, useContext } from 'react';
import styles from '../Styles/ManageProducts.module.css';
import { useUser } from '../context/endpoints.jsx';

const ManageProducts = () => {
  const { addProduct, getAllProducts } = useUser();
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      image: '',
      category: ''
  });
  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, [getAllProducts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProduct) {
        // Update product logic (implement PUT request here)
        console.log('Updating product...');
      } else {
        const newProduct = await addProduct(
          formData.name,
          formData.description,
          formData.price,
          formData.image,
          formData.category
        );
        setProducts([...products, newProduct]);
      }
      setFormData({ name: '', description: '', price: '', image: '', category: '' });
      setEditProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  const handleDelete = (id) => {
    // Implement DELETE request logic here
    console.log('Deleting product...');
  };

  return (
    <div className={styles.container}>
      <h1>Manage Products</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Product Name"
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
            placeholder="Product Description"
          />
        </label>
        <label className={styles.label}>
          Price
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={styles.input}
            placeholder="Product Price"
          />
        </label>
        <label className={styles.label}>
          Image URL
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={styles.input}
            placeholder="Image URL"
          />
        </label>
        <label className={styles.label}>
          Category
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.input}
            placeholder="Product Category"
          />
        </label>
        <button type="submit" className={styles.button}>
          {editProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>
      <div className={styles.productsList}>
        {products.map(product => (
          <div key={product.id} className={styles.productItem}>
            <h2>{product.name}</h2>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <button onClick={() => handleEdit(product)} className={styles.editButton}>Edit</button>
            <button onClick={() => handleDelete(product.id)} className={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProducts;
