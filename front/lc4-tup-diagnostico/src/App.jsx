import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FunctionList from "./components/functionList/FunctionList";
import FunctionForm from "./components/functionForm/FunctionForm";
import movies from "./data/movies";
import initialFunctions from "./data/functions";
import Button from 'react-bootstrap/Button';

function App() {
  const [functionsList, setFunctionsList] = useState(initialFunctions);
  const [editingFunction, setEditingFunction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddFunction = (newFunction) => {
    setFunctionsList([
      ...functionsList,
      { ...newFunction, id: functionsList.length + 1 },
    ]);
  };

  const handleEditFunction = (func) => {
    setEditingFunction(func);
    setIsModalOpen(true);
  };

  const handleUpdateFunction = (updatedFunction) => {
    setFunctionsList(
      functionsList.map((func) =>
        func.id === updatedFunction.id ? updatedFunction : func
      )
    );
    setEditingFunction(null);
    setIsModalOpen(false);
  };

  const handleDeleteFunction = (id) => {
    setFunctionsList(functionsList.filter((func) => func.id !== id));
  };

  return (
    <div>
      <h1>Gestión de Funciones</h1>
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        Agregar Nueva Función
      </Button>
      <FunctionList
        functions={functionsList}
        onEdit={handleEditFunction}
        onDelete={handleDeleteFunction}
      />
      <FunctionForm
        onSubmit={(data) => {
          if (editingFunction) {
            handleUpdateFunction({ ...data, id: editingFunction.id });
          } else {
            handleAddFunction(data);
          }
        }}
        initialData={editingFunction}
        movies={movies}
        show={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
