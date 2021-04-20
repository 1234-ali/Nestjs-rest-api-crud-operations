export interface Task {
    id: String,
    title: String,
    description: String,
    status: TaskStatus
}

export enum TaskStatus{
    DONE='DONE',
    IN_PROGRESS='IN_PROGRESS',
    OPEN='OPEN'
}