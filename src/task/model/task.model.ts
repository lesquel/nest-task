import { Priority, Status } from '../types';

export class Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export class ResponseTask {
  data: Task[];
}
