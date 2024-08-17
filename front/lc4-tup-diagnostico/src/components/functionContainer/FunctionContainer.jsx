import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch/UseFetch'; // Adjust the path as necessary
import FunctionList from '../functionList/FunctionList';
import Button from 'react-bootstrap/Button';

const FunctionContainer = () => {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [newFunction, setNewFunction] = useState({});

  // Fetch functions using GET method
  const { data: functions, loading, error } = useFetch('https://localhost:7062/api/Funcion/Funciones');


  return (
    <div>
      <h2>Function Container</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {functions && <FunctionList functions={functions}/>}
      <Button onClick={() => addFunction(newFunction)}>Add Function</Button>
    </div>
  );
};

export default FunctionContainer;