import Task from './Task'

export default interface TasksRepo {
    save(task: Task): Promise<Task>
    delete(task: Task): Promise<void>
    getAllTasks(): Promise<Task[]>
}