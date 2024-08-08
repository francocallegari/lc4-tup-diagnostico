import React, { useState } from "react";
import "./App.css";
import FunctionForm from "./components/functionForm/FunctionForm";
import FunctionList from "./components/functionList/FunctionList";
import movies from "./data/movies";
import functions from "./data/functions";

function App() {
  const [functionsList, setFunctionsList] = useState(functions);
  const [editingFunction, setEditingFunction] = useState(null);

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
      <FunctionForm
        onSubmit={handleAddFunction}
        initialData={editingFunction}
        movies={movies}
      />
      <br/>
      <FunctionList
        functions={functionsList}
        onEdit={handleEditFunction}
        onDelete={handleDeleteFunction}
      />
    </div>
  );
}

export default App;
