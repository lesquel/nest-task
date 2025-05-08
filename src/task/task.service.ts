import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();
@Injectable()
export class TaskService {
  async create(createTaskDto: CreateTaskDto) {
    return await prisma.task.create({
      data: createTaskDto,
    });
  }

  async findAll() {
    return await prisma.task.findMany();
  }

  async findOne(id: number) {
    return await prisma.task.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await prisma.task.update({
      where: {
        id: id,
      },
      data: updateTaskDto,
    });
  }
  
  async delete(id: number) {
    return await prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
