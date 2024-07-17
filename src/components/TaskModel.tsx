import React, { useState, useContext } from 'react';
import { Project, Task } from '../types/ProjectType';
import { ProjectContext } from '../context/ProjectContext';

interface TaskModalProps {
  project: Project;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ project, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const projectContext = useContext(ProjectContext);
  if (!projectContext) {
    throw new Error("ProjectContext must be used within a ProjectProvider");
  };
  const { addTask } = projectContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName && taskStatus) {
      const newTask: Task = {
        id: project.tasks.length + 1,
        name: taskName,
        status: taskStatus
      };
      console.log(project.id)
      console.log(newTask);
      addTask(project.id, newTask);
      project.tasks.push(newTask);
      setTaskName('');
      setTaskStatus('');
    }
  };

  return (
    <div className="modal">
      <div style={{ border: '1px solid black', padding: '10px' }}>
      <div className='modal-header'>
        <h2>{project.name}</h2>
      </div>
      <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '50px' }}>Task Name:</label>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '50px' }}>Task Status:</label>
            <input
              type="text"
              placeholder="Task Status"
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value)}
            />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <button type="submit" style={{ height: '30px', width: '100px'}}>Add Task</button>
        </div>
      </form>
      <ul>
        {project.tasks.map(task => (
          <li key={task.id} style={{margin: '10px 0'}}>{task.name} - {task.status}</li>
        ))}
      </ul>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
      <button onClick={onClose} style={{ height: '30px', width: '100px'}}>Close</button>
      </div>
      </div>
    </div>
  );
};

export default TaskModal;
