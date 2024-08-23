import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import './functionList.css';

const FunctionList = ({ functions, onDelete, onEdit }) => {
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
                <Button variant="danger" onClick={() => onDelete(func.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FunctionList;
