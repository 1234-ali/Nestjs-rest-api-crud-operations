import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService) {}

    @Get()
    getAllTasks():Task[] {
        return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(
        @Param('id') id:string,
    ) {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTasks(
        @Body('title') title:string,
        @Body('description') description:string
    ) {
        return this.taskService.createTask(title, description);
    }

    @Patch('/:id')
    updateTask(
        @Param('id') id:string,
        @Body('status') status:TaskStatus
    ){
        return this.taskService.updateTask(id, status);
    }

    @Delete('/:id')
    deleteTask(
        @Param('id') id:string
    ){
        this.taskService.deleteTask(id);

        return `task ${id} is deleted.`
    }

}
