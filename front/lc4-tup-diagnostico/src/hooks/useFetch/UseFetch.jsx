import { useState, useEffect } from 'react';

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("eRROR EN LA CONEXIÓN");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;

// PARA HACER EL FETCH EN OTROS COMPONENTES:
// const { data: functions, loading, error } = useFetch('/api/functions'); 

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error}</p>;
