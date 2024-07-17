import { Fragment, useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import AddProjectForm from "../components/AddProjectForm";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../types/ProjectType";
import TaskModel from "../components/TaskModel";
import styled from "styled-components";
import useFetchProjects from "../hooks/useFetchProjects";

const DashboardPage = () => {

    const projectContext = useContext(ProjectContext);
    if (!projectContext) {
        throw new Error('useFetchProjects must be used within a ProjectProvider');
    }
    const { projects } = projectContext;

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useFetchProjects();

    return (
        <Fragment>
            <div className="dashboard">
                <h1> PROJECT MANAGEMENT </h1>
            </div>
            <AddProjectForm />
            <div className="card">
                {projects.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} onView={setSelectedProject} />
                ))}
            </div>
            {selectedProject && (
                <ModalWrapper>
                    <TaskModel project={selectedProject} onClose={() => setSelectedProject(null)} />
                </ModalWrapper>
            )}
        </Fragment>
    )
}

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;`

export default DashboardPage;