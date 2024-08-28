import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import './functionList.css';

const FunctionList = ({ functions, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [funcToDelete, setFuncToDelete] = useState(null);

  if (functions.length === 0) {
    return <p>No se encontraron funciones.</p>;
  }

  const formatDateToShow = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
  };

  const formatTimeToShow = (timeString) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    const time = new Date(`1970-01-01T${timeString}`);
    return time.toLocaleTimeString('es-ES', options);
  };

  const handleDeleteClick = (func) => {
    setFuncToDelete(func);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(funcToDelete.id);
    setShowModal(false);
  };

  return (
    <div className="table-container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Pelicula</th>
            <th>Director</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {functions.map((func) => (
            <tr key={func.id}>
              <td>{func.id}</td>
              <td>{formatDateToShow(func.fecha)}</td>
              <td>{formatTimeToShow(func.horario)}</td>
              <td>{func.pelicula.nombre}</td>
              <td>{func.pelicula.director.nombre}</td>
              <td>{func.precio}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit(func)}>
                  Editar
                </Button>
                <Button variant="danger" onClick={() => handleDeleteClick(func)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={handleConfirmDelete}
        title="Confirmar eliminación"
        body={`¿Deseas eliminar esta función de la película "${funcToDelete?.pelicula.nombre}"?`}
      />
    </div>
  );
};

export default FunctionList;

