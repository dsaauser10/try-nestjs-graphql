import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
// import { IGraphQLError } from '../../utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(UserService.name);

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    try {
      return await this.prisma.user.create(userCreateArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    try {
      return await this.prisma.user.createMany(userCreateManyArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    try {
      return await this.prisma.user.findUnique(userFindUniqueArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    try {
      return await this.prisma.user.findMany(userFindManyArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    try {
      return await this.prisma.user.findFirst(userFindFirstArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    try {
      return await this.prisma.user.update(userUpdateOneArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    try {
      return await this.prisma.user.updateMany(userUpdateManyArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    try {
      await this.prisma.user.delete(userDeleteArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    try {
      await this.prisma.user.deleteMany(userDeleteManyArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    try {
      return await this.prisma.user.aggregate(userAggregateArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    try {
      return await this.prisma.user.count(userCountArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }
}
