import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState();
  console.log(projects);
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/projects').then((response) => {
      setProjects([].concat(response.data.projects).reverse())
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  return [loading, projects, error, setLoading, setProjects, setError];
}
