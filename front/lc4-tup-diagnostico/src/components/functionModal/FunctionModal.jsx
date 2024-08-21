import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const FunctionModal = ({ show, onHide, onSubmit, peliculas }) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [precio, setPrecio] = useState("");
  const [peliculaId, setPeliculaId] = useState("");

  const handleSubmit = () => {
    if (
      !year ||
      !month ||
      !day ||
      !hours ||
      !minutes ||
      !precio ||
      !peliculaId
    ) {
      alert("Por favor complete todos los campos");
      return;
    }

    const newFunction = {
      Year: parseInt(year, 10),
      Month: parseInt(month, 10),
      Day: parseInt(day, 10),
      Hours: parseInt(hours, 10),
      Minutes: parseInt(minutes, 10),
      Precio: parseFloat(precio),
      PeliculaId: parseInt(peliculaId, 10),
    };

    onSubmit(newFunction);

    setYear("");
    setMonth("");
    setDay("");
    setHours("");
    setMinutes("");
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
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Ingrese el año"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mes</Form.Label>
            <Form.Control
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="Ingrese el mes"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Día</Form.Label>
            <Form.Control
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="Ingrese el dia"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="Ingrese la hora"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Minuto</Form.Label>
            <Form.Control
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="Ingrese los minutos"
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
