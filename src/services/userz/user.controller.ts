import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    return await this.userService.createOne(userCreateArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return await this.userService.findOne({
      ...userFindUniqueArgs,
      include: { products: true },
    });
  }

  async findMany() {
    return await this.userService.findMany({ include: { products: true } });
  }
}
