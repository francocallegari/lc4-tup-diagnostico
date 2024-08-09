import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './functionList.css'

const FunctionList = ({ functions, onEdit, onDelete }) => {
  return (
    <div className='table-container'>
      <h2>Lista de funciones:</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Precio</th>
            <th>Película</th>
            <th>Director</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {functions.map((func, index) => (
            <tr key={func.id}>
              <td>{index + 1}</td>
              <td>{func.fecha}</td>
              <td>{func.horario}</td>
              <td>{func.precio}</td>
              <td>{func.pelicula}</td>
              <td>{func.director}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit(func)}>
                  Editar
                </Button>{' '}
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

