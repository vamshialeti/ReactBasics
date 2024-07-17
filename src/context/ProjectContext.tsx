import { createContext, ReactNode, useState } from "react";
import { Project, Task } from "../types/ProjectType";

interface IProjectContext {
    projects: Project[];
    addProject: ( name: string, description: string ) => void;
    addTask: (projectId: number, task: Task) => void;
    setInitialProjects: (projects: Project[]) => void;
}

const ProjectContext = createContext<IProjectContext | undefined>(undefined);

if(!ProjectContext){
    throw new Error("ProjectContext must be used within a ProjectProvider");
}

const ProjectProvider = ({ children }: { children: ReactNode }) => {

    const [projects, setProjects] = useState<Project[]>([]);

    const addProject = ( name: string, description: string ) => {
        const newProject = {
            id: projects.length + 1,
            name,
            description,
            tasks: []
        }
        setProjects(prevProjects => [...prevProjects, newProject]);
    }

    const addTask = (projectId: number, task: Task) => {
        const updatedProjects = projects.map(project => 
            project.id === projectId ? {...project, tasks: [...project.tasks, task]} : project
        );
        setProjects(updatedProjects);
    }

    const setInitialProjects = (initialProjects: Project[]) => {
        setProjects(initialProjects);
    }

    return(
        <ProjectContext.Provider value={{ projects, addProject, addTask, setInitialProjects }}>
            {children}
        </ProjectContext.Provider>
    )
}

export { ProjectContext, ProjectProvider };