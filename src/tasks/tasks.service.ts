import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
    private tasks : Task[] = [];

    getAllTasks():Task[] {
        return this.tasks;
    }

    getTaskById(id: string){
        return this.tasks.find(t => t.id === id);
    }

    createTask(title:string,description:string):Task{
        const task : Task = {
            id: Date.now().toString(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);

        return task;
    }

    updateTask(id: string, taskStatus: TaskStatus):Task{
        let task = this.getTaskById(id);

        task.status = taskStatus;

        return task;
    }


    deleteTask(id: string) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}