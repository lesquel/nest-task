import {
  IsString,
  IsInt,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Priority, Status } from '../types';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(5)
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsInt()
  @IsNotEmpty()
  priority: Priority;
  @IsString()
  @IsNotEmpty()
  status: Status;
}
