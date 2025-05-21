import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { LoginUserDto, RegisterUserDto, ValidateUserDto } from './dto';

const prisma = new PrismaClient();
@Injectable()
export class AuthService {
  constructor() {}

  async register(registerUserDto: RegisterUserDto) {
    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);
    const user = await prisma.user.create({
      data: {
        ...registerUserDto,
        password: hashedPassword,
      },
    });
    return user;
  }

  async login(loginUserDto: LoginUserDto) {
    const user =
      (await prisma.user.findUnique({
        where: { username: loginUserDto.identifier },
      })) ||
      (await prisma.user.findUnique({
        where: { email: loginUserDto.identifier },
      }));

    console.log(user);
    if (!user) return null;
    console.log('userrrrrrrrrrrrr');
    const isMatch = await bcrypt.compare(loginUserDto.password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
    return user;
  }
}
