import React, { useState, useEffect } from 'react';
import styles from '../Styles/ManageEvents.module.css';
import { useUser } from '../context/endpoints.jsx';

function ManageEvents() {
  const { getAllEvents, createEvent, updateEvent } = useUser();
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    models: '',
    products: '',
  });

  // Obtener eventos desde el backend al cargar el componente
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await getAllEvents();
        if (Array.isArray(allEvents)) {
          setEvents(allEvents);
        } else {
          console.error('Unexpected response format:', allEvents);
          setEvents([]); // Asegura que sea un arreglo vacío
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]); // Evita errores de renderizado
      }
    };
    fetchEvents();
  }, [getAllEvents]);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editEvent) {
        // Actualizar evento existente
        const updatedEvent = await updateEvent(editEvent.id, {
          ...formData,
          models: formData.models.split(',').map((model) => model.trim()),
          products: formData.products.split(',').map((product) => product.trim()),
        });
        setEvents(events.map(event => event.id === editEvent.id ? updatedEvent : event));
      } else {
        // Crear nuevo evento
        const newEvent = await createEvent({
          ...formData,
          models: formData.models.split(',').map((model) => model.trim()),
          products: formData.products.split(',').map((product) => product.trim()),
        });
        setEvents([...events, newEvent]);
      }
      // Limpiar formulario y estado de edición
      setFormData({ name: '', date: '', location: '', models: '', products: '' });
      setEditEvent(null);
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setFormData({
      name: event.event_name,
      date: event.event_date,
      location: event.event_location,
      models: event.models,
      products: event.products,
    });
  };

  const handleDelete = (id) => {
    console.log('Delete functionality to be implemented.');
  };

  return (
    <div className={styles.container}>
      <h1>Manage Events</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Event Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Event Name"
            required
          />
        </label>
        <label className={styles.label}>
          Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Location
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={styles.input}
            placeholder="Event Location"
            required
          />
        </label>
        <label className={styles.label}>
          Models (comma-separated)
          <input
            type="text"
            name="models"
            value={formData.models}
            onChange={handleChange}
            className={styles.input}
            placeholder="Model 1, Model 2"
          />
        </label>
        <label className={styles.label}>
          Products (comma-separated)
          <input
            type="text"
            name="products"
            value={formData.products}
            onChange={handleChange}
            className={styles.input}
            placeholder="Product 1, Product 2"
          />
        </label>
        <button type="submit" className={styles.button}>
          {editEvent ? 'Update Event' : 'Add Event'}
        </button>
      </form>
      <div className={styles.eventsList}>
  {events.length > 0 ? (
    events.map((event, index) => (
      event ? (
        <div key={index} className={styles.eventItem}>
          <h2>{event.event_name}</h2>
          <p><strong>Date:</strong> {event.event_date}</p>
          <p><strong>Location:</strong> {event.event_location}</p>
          <p><strong>Models:</strong> {event.models || 'No models listed'}</p>
          <p><strong>Products:</strong> {event.products || 'No products listed'}</p>
        </div>
      ) : (
        <p key={index} className={styles.error}>Invalid event data</p>
      )
    ))
  ) : (
    <p>No events to display.</p>
  )}
</div>
    </div>
  );
}

export default ManageEvents;
