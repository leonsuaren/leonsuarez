import { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/projects').then((response) => {
      setProjects(response.data.projects)
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  return (
    <ProjectsContext.Provider value={{ loading, setLoading, projects, setProjects, error, setError }}>
      { children }
    </ProjectsContext.Provider>
  )
};