import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskModule } from './task';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
