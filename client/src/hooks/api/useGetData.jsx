import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetData = (uri) => {
  const [dat, setData] = useState([]);
  const [load, setLoading] = useState(true);
  const [erro, setError] = useState(null);
  console.log(dat)
  useEffect(() => {
    if (!uri) return;
      axios.get(uri)
      .then(response => response.data)
      .then(setData)
      .then(setLoading(false))
      .catch(setError)
  }, [uri]);

  return {load, dat, erro};
}
