import {
  IsString,
  IsInt,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Priority, Status } from '../types';
import { ConnectDto } from 'src/dto';

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
  @IsNotEmpty()
  connect : ConnectDto;
}
