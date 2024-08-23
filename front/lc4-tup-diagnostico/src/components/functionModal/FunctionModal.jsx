import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const FunctionModal = ({ show, onHide, onSubmit, peliculas }) => {
  const [fechaHora, setFechaHora] = useState("");
  const [precio, setPrecio] = useState("");
  const [peliculaId, setPeliculaId] = useState("");

  const handleSubmit = () => {
    if (
      !fechaHora ||
      !precio ||
      !peliculaId
    ) {
      alert("Por favor complete todos los campos");
      return;
    }

    const newFunction = {
      Fecha: fechaHora,
      Precio: parseFloat(precio),
      PeliculaId: parseInt(peliculaId, 10),
    };

    onSubmit(newFunction);

    setFechaHora("");
    setPrecio("");
    setPeliculaId("");
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar nueva función</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Fecha y Hora</Form.Label>
            <Form.Control
              type="datetime-local"
              value={fechaHora}
              onChange={(e) => setFechaHora(e.target.value)}
              placeholder="Ingrese la fecha y hora"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Pelicula</Form.Label>
            <Form.Control
              as="select"
              value={peliculaId}
              onChange={(e) => setPeliculaId(e.target.value)}
            >
              <option value="">Seleccione la película a agregar</option>
              {peliculas &&
                peliculas.map((pelicula) => (
                  <option key={pelicula.id} value={pelicula.id}>
                    {pelicula.nombre}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Agregar funcion
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FunctionModal;
