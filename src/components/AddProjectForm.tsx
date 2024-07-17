import { Fragment, useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";

const AddProjectForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const projectContext = useContext(ProjectContext);
    if (!projectContext) {
        throw new Error("ProjectContext must be used within a ProjectProvider");
    };
    const { addProject } = projectContext;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProject(name, description);
        setName('');
        setDescription('');
    }

    return (
        <Fragment>

        <div style={{margin: '20px 0', paddingLeft: '20px', textDecoration: 'underline'}}>
            <h2>Add New Project</h2>
        </div>
        <form onSubmit={handleSubmit} className="add-project">

            <div className="column">
                <label style={{ paddingBottom: '10px' }}>Project Name</label>
                <input type="text" style={{ height: '20px' }}
                    placeholder="Project Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="column">
                <label style={{ paddingBottom: '10px' }}>Project Description</label>
                <input style={{ height: '20px' }} type="text"
                    placeholder="Project Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <div className="button">
                <button type="submit" style={{backgroundColor: 'darkcyan', height: '30px', color: 'white'}}>Add New Project</button>
            </div>

        </form>
        </Fragment>
    );
}

export default AddProjectForm;