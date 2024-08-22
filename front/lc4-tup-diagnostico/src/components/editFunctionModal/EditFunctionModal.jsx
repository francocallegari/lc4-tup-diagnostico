import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFunctionModal = ({
  show,
  onHide,
  onSubmit,
  functionToEdit,
  peliculas,
}) => {
  const [fecha, setFecha] = useState("");
  const [precio, setPrecio] = useState("");
  const [peliculaId, setPeliculaId] = useState("");

  useEffect(() => {
    if (functionToEdit) {
      const { fecha, precio, peliculaId } = functionToEdit;

      // Verifica y formatea la fecha
      if (fecha) {
        const date = new Date(fecha);
        const formattedDate = date.toISOString().split("T")[0];
        console.log("Fecha:", formattedDate);
        setFecha(formattedDate);
      }
      
      setPrecio(precio);
      setPeliculaId(peliculaId);
    }
  }, [functionToEdit]);

  const handleSubmit = () => {
    if (!fecha || !precio || !peliculaId) {
      alert("Por favor complete todos los campos");
      return;
    }
  
    const updatedFunction = {
      Fecha: fecha, 
      Precio: parseFloat(precio),
      PeliculaId: parseInt(peliculaId, 10),
    };
  
    console.log("Función actualizada:", updatedFunction);
  
    onSubmit(updatedFunction);
  
    onHide();
  
    setFecha("");
    setPrecio("");
    setPeliculaId("");
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar función</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              placeholder="Ingrese la fecha"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ingrese el precio"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Película</Form.Label>
            <Form.Control
              as="select"
              value={peliculaId}
              onChange={(e) => setPeliculaId(e.target.value)}
            >
              <option value="">Seleccione la película</option>
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
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditFunctionModal;
