import React, { useState, useEffect } from 'react';
import UseFetch from '../../hooks/useFetch/UseFetch'; 
import FunctionList from '../functionList/FunctionList';
import Button from 'react-bootstrap/Button';
import FunctionModal from '../functionModal/FunctionModal'; // Componente del modal

const FunctionContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [functions, setFunctions] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const functionResponse = await fetch('https://localhost:7062/api/Funcion/Funciones');
        const functionData = await functionResponse.json();
        setFunctions(functionData);
        
        const peliculaResponse = await fetch('https://localhost:7062/api/Pelicula/Peliculas');
        const peliculaData = await peliculaResponse.json();
        setPeliculas(peliculaData);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddFunction = async (newFunction) => {
    try {
      const response = await fetch('https://localhost:7062/api/Funcion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFunction),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add function');
      }
  
      const addedFunction = await response.json();
      setFunctions((prevFunctions) => [...prevFunctions, addedFunction]);
      setShowModal(false);
    } catch (err) {
      setError('Failed to add function');
    }
  };
  

  return (
    <div>
      <h2>Funciones:</h2>
      {loading && <p>Cargando la información...</p>}
      {error && <p>Error: {error}</p>}
      {functions && <FunctionList functions={functions} />}
      <Button onClick={() => setShowModal(true)}>Añadir función</Button>
      <FunctionModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        onSubmit={handleAddFunction} 
        peliculas={peliculas} 
      />
    </div>
  );
};

export default FunctionContainer;

