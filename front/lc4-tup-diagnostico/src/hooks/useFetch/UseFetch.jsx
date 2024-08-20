import { useState, useEffect } from 'react';

const UseFetch = (url, options = {}) => {
  const { method = 'GET', body = null, headers = { 'Content-Type': 'application/json' } } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : null,
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
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
  }, [url, method, body, headers]);

  return { data, loading, error };
};

export default UseFetch;

