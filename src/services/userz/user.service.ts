import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    try {
      return this.prisma.user.create(userCreateArgs);
    } catch (error) {
      throw error;
    }
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    try {
      return this.prisma.user.findUnique(userFindUniqueArgs);
    } catch (error) {
      throw error;
    }
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    try {
      return this.prisma.user.findMany(userFindManyArgs);
    } catch (error) {
      throw error;
    }
  }
}
