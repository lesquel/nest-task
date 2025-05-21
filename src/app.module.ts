import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskModule } from './task';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TaskModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
