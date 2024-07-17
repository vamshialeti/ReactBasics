export interface Task{
    id: number;
    name: string;
    status: string;
}

export interface Project{
    id: number;
    name: string;
    description: string;
    tasks: Task[];
}