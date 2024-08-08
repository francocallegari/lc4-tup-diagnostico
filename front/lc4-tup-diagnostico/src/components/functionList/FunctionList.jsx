import React from 'react';

const FunctionList = ({ functions, onEdit, onDelete }) => {
  return (
    <div>
    <h2>Lista de funciones:</h2>
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Horario</th>
          <th>Precio</th>
          <th>Película</th>
          <th>Director</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {functions.map((func) => (
          <tr key={func.id}>
            <td>{func.fecha}</td>
            <td>{func.horario}</td>
            <td>{func.precio}</td>
            <td>{func.pelicula}</td>
            <td>{func.director}</td>
            <td>
              <button onClick={() => onEdit(func)}>Editar</button>
              <button onClick={() => onDelete(func.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default FunctionList;

