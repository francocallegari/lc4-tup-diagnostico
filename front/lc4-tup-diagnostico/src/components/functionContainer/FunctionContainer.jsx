import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import FunctionList from "../functionList/FunctionList";
import FunctionModal from "../functionModal/FunctionModal";
import EditFunctionModal from "../editFunctionModal/EditFunctionModal";

const FunctionContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [functions, setFunctions] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [functionToEdit, setFunctionToEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const functionResponse = await fetch(
          "https://localhost:7062/api/Funcion/Funciones"
        );
        const functionData = await functionResponse.json();
        setFunctions(functionData);

        const peliculaResponse = await fetch(
          "https://localhost:7062/api/Pelicula/Peliculas"
        );
        const peliculaData = await peliculaResponse.json();
        setPeliculas(peliculaData);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddFunction = async (newFunction) => {
    try {
      const response = await fetch("https://localhost:7062/api/Funcion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFunction),
      });

      if (!response.ok) {
        throw new Error("Failed to add function");
      }

      const addedFunction = await response.json();
      setFunctions((prevFunctions) => [...prevFunctions, addedFunction]);
      setShowModal(false);
    } catch (err) {
      setError("Failed to add function");
    }
  };

  const handleDeleteFunction = async (id) => {
    try {
      const response = await fetch(`https://localhost:7062/api/Funcion/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete function");
      }

      setFunctions((prevFunctions) =>
        prevFunctions.filter((func) => func.id !== id)
      );
    } catch (err) {
      setError("Failed to delete function");
    }
  };

  const handleEditFunction = async (updatedFunction) => {
    try {
      const response = await fetch(
        `https://localhost:7062/api/Funcion/${functionToEdit.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFunction),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to update function");
      }
  
      const editedFunction = await response.json();
      setFunctions((prevFunctions) =>
        prevFunctions.map((func) =>
          func.id === functionToEdit.id ? editedFunction : func
        )
      );
      setShowEditModal(false);
  
      window.location.reload();
    } catch (err) {
      setError("Error al actualizar la función");
    }
  };

  const openEditModal = (func) => {
    setFunctionToEdit(func);
    setShowEditModal(true);
  };

  return (
    <div>
      <h2>Funciones:</h2>
      {loading && <p>Cargando la información...</p>}
      {error && <p>Error: {error}</p>}
      {functions && (
        <FunctionList
          functions={functions}
          onDelete={handleDeleteFunction}
          onEdit={openEditModal}
        />
      )}
      <Button onClick={() => setShowModal(true)} variant="light">Añadir función</Button>
      <FunctionModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSubmit={handleAddFunction}
        peliculas={peliculas}
      />

      {functionToEdit && (
        <EditFunctionModal
          show={showEditModal}
          onHide={() => {
            setShowEditModal(false);
            setFunctionToEdit(null);
          }}
          onSubmit={handleEditFunction}
          functionToEdit={functionToEdit}
          peliculas={peliculas}
        />
      )}
    </div>
  );
};

export default FunctionContainer;

