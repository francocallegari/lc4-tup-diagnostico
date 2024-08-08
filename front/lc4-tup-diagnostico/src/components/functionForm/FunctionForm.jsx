import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FunctionForm = ({ onSubmit, initialData = {}, movies, show, handleClose }) => {
  const [formData, setFormData] = useState({
    fecha: '',
    horario: '',
    precio: '',
    pelicula: '',
    director: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        fecha: initialData.fecha || '',
        horario: initialData.horario || '',
        precio: initialData.precio || '',
        pelicula: initialData.pelicula || '',
        director: initialData.director || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      fecha: '',
      horario: '',
      precio: '',
      pelicula: '',
      director: '',
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Formulario para agregar funciones</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Fecha:</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Horario:</label>
            <input
              type="time"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Precio:</label>
            <input
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Película:</label>
            <select
              name="pelicula"
              value={formData.pelicula}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una película</option>
              {movies.map((movie) => (
                <option key={movie.title} value={movie.title}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Director:</label>
            <input
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
              required
            />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default FunctionForm;
