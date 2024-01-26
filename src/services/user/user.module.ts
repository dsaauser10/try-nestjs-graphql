import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [UserResolver, UserController, UserService, PrismaService],
  exports: [UserController],
  // controllers: []
})
export class UserModule {}
