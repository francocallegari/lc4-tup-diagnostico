import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const FunctionList = ({ functions, onDelete, onEdit }) => {
  if (functions.length === 0) {
    return <p>No se encontraron funciones.</p>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Horario</th>
          <th>Pelicula</th>
          <th>Director</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {functions.map((func) => (
          <tr key={func.id}>
            <td>{func.id}</td>
            <td>{func.fecha}</td>
            <td>{func.horario}</td>
            <td>{func.pelicula.nombre}</td>
            <td>{func.pelicula.director.nombre}</td>
            <td>{func.precio}</td>
            {
              <td>
                <Button variant="warning" onClick={() => onEdit(func)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(func.id)}>
                  Delete
                </Button>
              </td>
            }
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FunctionList;
