import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FunctionList from "./components/functionList/FunctionList";
import FunctionForm from "./components/functionForm/FunctionForm";
import movies from "./data/movies";
import initialFunctions from "./data/functions";
import Button from "react-bootstrap/Button";

function App() {
  const [functionsList, setFunctionsList] = useState(initialFunctions);
  const [editingFunction, setEditingFunction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  const handleAddFunction = (newFunction) => {
    // Verifica cuántas funciones tiene el director en el día
    const directorFunctionsToday = functionsList.filter(
      (func) =>
        func.director === newFunction.director &&
        func.fecha === newFunction.fecha
    );

    if (directorFunctionsToday.length >= 10) {
      setAlertMessage(
        "Este director ya tiene el máximo de 10 funciones en este día"
      );
      setAlertVariant("warning");
      return;
    }

    // Verifica si la película es internacional y tiene más de 8 funciones
    const isInternational = movies.find(
      (movie) => movie.title === newFunction.pelicula
    )?.international;

    if (isInternational) {
      const movieFunctions = functionsList.filter(
        (func) => func.pelicula === newFunction.pelicula
      );

      if (movieFunctions.length >= 8) {
        setAlertMessage(
          "Las películas internacionales pueden tener un máximo de 8 funciones."
        );
        setAlertVariant("warning");
        return;
      }
    }

    // Si pasa todas las validaciones, agrega la función
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

  const openAddFunctionModal = () => {
    setEditingFunction(null); // Limpiar cualquier función en edición
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1>Gestión de Funciones</h1>
      <Button variant="primary" onClick={openAddFunctionModal}>
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
        initialData={editingFunction || {}} // Si no hay función en edición, pasar un objeto vacío
        movies={movies}
        show={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;