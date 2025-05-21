import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto, ValidateUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    return await this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    return await this.authService.login(body);
  }
}
