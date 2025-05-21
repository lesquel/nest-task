import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class TaskService {
  async create(createTaskDto: CreateTaskDto) {
    return await prisma.task.create({
      data: {
        description: createTaskDto.description,
        title: createTaskDto.title,
        priority: createTaskDto.priority,
        status: createTaskDto.status,
        user: {
          connect: {
            id: createTaskDto.connect.id,
          },
        },
      },
    });
  }

  async findAll(userId: number) {
    return await prisma.task.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    return await prisma.task.findUnique({
      where: {
        id: id,
        userId: userId,
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
