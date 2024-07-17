import { Project } from "../types/ProjectType";

interface ProjectCardProps {

    project: Project,
    onView: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onView }) => {

    return (
        <div className="project-list">
            <div style={{width: '40%'}}>
            <h3>{project.name}</h3>
            </div>
            <div style={{width: '40%'}}>
            <p>{project.description}</p>
            </div>
            <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
            <button onClick={() => onView(project)} style={{height: '30px', width: '100px'}}>View</button>
            </div>
        </div>
    )
}

export default ProjectCard;