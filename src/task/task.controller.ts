import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { UserInRquest } from 'src/auth/models';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @Get()
    findAll(@Query('userId') userId: number) {
        return this.taskService.findAll(Number(userId));
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @Req() req: UserInRquest) {
        return this.taskService.findOne(id, req.userId);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto) {
        return this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.delete(id);
    }
}
