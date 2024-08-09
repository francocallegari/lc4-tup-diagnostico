import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FunctionList from "./components/functionList/FunctionList";
import FunctionForm from "./components/functionForm/FunctionForm";
import movies from "./data/movies";
import initialFunctions from "./data/functions";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function App() {
  const [functionsList, setFunctionsList] = useState(initialFunctions);
  const [editingFunction, setEditingFunction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  const showAlert = (message, variant) => {
    setAlertMessage(message);
    setAlertVariant(variant);

    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  };

  const handleAddFunction = (newFunction) => {
    const directorFunctionsToday = functionsList.filter(
      (func) =>
        func.director === newFunction.director && func.fecha === newFunction.fecha
    );
  
    if (directorFunctionsToday.length >= 10) {
      showAlert("Este director ya tiene el máximo de 10 funciones en este día", "warning");
      return;
    }
  
    const selectedMovie = movies.find(
      (movie) => movie.title === newFunction.pelicula
    );
  
    if (selectedMovie && selectedMovie.genre === "International") {
      const movieFunctions = functionsList.filter(
        (func) => {
          const movie = movies.find((movie) => movie.title === func.pelicula);
          return movie && movie.genre === "International";
        }
      );
  
      if (movieFunctions.length >= 2) {
        showAlert("Las películas internacionales pueden tener un máximo de 8 funciones.", "warning");
        return;
      }
    }
  
    // Si pasa las validaciones, agrega la funcion
    setFunctionsList([
      ...functionsList,
      { ...newFunction, id: functionsList.length + 1 },
    ]);
  
    showAlert("Función agregada exitosamente", "success");
    setIsModalOpen(false);
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
    showAlert("Función actualizada exitosamente", "success");
  };

  const handleDeleteFunction = (id) => {
    setFunctionsList(functionsList.filter((func) => func.id !== id));
    showAlert("Función eliminada exitosamente.", "danger");
  };

  return (
    <div>
      <h1>Gestión de Funciones</h1>

      <div className="alert-container">
      {alertMessage && (
        <Alert variant={alertVariant} onClose={() => setAlertMessage('')} dismissible>
          {alertMessage}
        </Alert>
      )}
      </div>

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
