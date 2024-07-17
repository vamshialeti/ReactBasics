import { useContext, useEffect } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import mockData from '../mockData/projects.json';

const useFetchProjects = () => {
  const projectContext = useContext(ProjectContext);
  if (!projectContext) {
    throw new Error('useFetchProjects must be used within a ProjectProvider');
  }
  const { setInitialProjects,projects } = projectContext;

  useEffect(() => {
    // Mock API call to fetch initial projects
    const fetchProjects = async () => {
      try {
        const data = await new Promise(resolve => setTimeout(() => resolve(mockData), 1000));
        setInitialProjects(data as any);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);
};

export default useFetchProjects;
