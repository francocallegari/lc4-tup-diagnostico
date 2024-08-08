import React, { useState, useEffect } from "react";

const FunctionForm = ({ onSubmit, initialData = {}, movies }) => {
  const [formData, setFormData] = useState({
    fecha: "",
    horario: "",
    precio: "",
    pelicula: "",
    director: "",
  });

  useEffect(() => {
    // Solo actualiza el estado si initialData no es nulo
    if (initialData) {
      setFormData({
        fecha: initialData.fecha || "",
        horario: initialData.horario || "",
        precio: initialData.precio || "",
        pelicula: initialData.pelicula || "",
        director: initialData.director || "",
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
      fecha: "",
      horario: "",
      precio: "",
      pelicula: "",
      director: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario para agregar funciones:</h2>
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
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FunctionForm;
