import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class UserMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    // no hice esto porque solo era hacer algo sencillo y ya me dio pereza hahahha
    next();
  }
}
