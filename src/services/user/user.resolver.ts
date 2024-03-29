// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from '../../utils/relations.decorator';
import {
  AggregateUser,
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserAggregateArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
} from '../../@generated';
import { UserController } from './user.controller';
import BatchPayload from '../../model/batch-payload.model';
import { replaceNullWithUndefined } from '../../utils/replace-null-with-undefined.function';
// import { UseGuards } from '@nestjs/common';
// import { RequiredPermission } from 'src/decorator/permission.decorator';
// import { PermissionGuard } from '../role-permission/role-permission.guard';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface UserSelect {
  select: Prisma.UserSelect;
}

// @UseGuards(JwtAuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userController: UserController) {}

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userCreateOne(
  //   @Args()
  //   userCreateArgs: CreateOneUserArgs,
  //   @Relations() relations: UserSelect,
  // ): Promise<User | void> {
  //   return await this.userController.createOne({
  //     ...replaceNullWithUndefined(userCreateArgs),
  //     select: relations.select,
  //   });
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userCreateMany(
  //   @Args()
  //   createManyUserArgs: CreateManyUserArgs,
  // ) {
  //   return await this.userController.createMany(
  //     replaceNullWithUndefined(createManyUserArgs),
  //   );
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userFindOne(
  //   @Args()
  //   userFindUniqueArgs: FindUniqueUserArgs,
  //   @Relations() relations: UserSelect,
  // ): Promise<User | void> {
  //   return this.userController.findOne({
  //     ...replaceNullWithUndefined(userFindUniqueArgs),
  //     select: relations.select,
  //   });
  // }

  // @RequiredPermission(Permission.CREATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Query(() => [User], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindMany(
    @Args() userFindManyArgs: FindManyUserArgs,
    @Relations() relations: UserSelect,
  ) {
    return this.userController.findMany({
      ...replaceNullWithUndefined(userFindManyArgs),
      select: relations.select,
    });
  }

  // @RequiredPermission(Permission.CREATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindFirst(
    @Args()
    findFirstUserArgs: FindFirstUserArgs,
    @Relations() relations: UserSelect,
  ): Promise<User | void> {
    return this.userController.findFirst({
      ...replaceNullWithUndefined(findFirstUserArgs),
      select: relations.select,
    });
  }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userUpdateOne(
  //   @Args() userUpdateOneArgs: UpdateOneUserArgs,
  //   @Relations() relations: UserSelect,
  // ) {
  //   return this.userController.updateOne({
  //     ...replaceNullWithUndefined(userUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userUpdateMany(@Args() updateManyUserArgs: UpdateManyUserArgs) {
  //   return this.userController.updateMany(
  //     replaceNullWithUndefined(updateManyUserArgs),
  //   );
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userDeleteOne(@Args() deleteOneUserArgs: DeleteOneUserArgs) {
  //   return this.userController.delete(deleteOneUserArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userDeleteMany(@Args() deleteManyUserArgs: DeleteManyUserArgs) {
  //   return this.userController.deleteMany(deleteManyUserArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => AggregateUser, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userAggregate(@Args() userAggregateArgs: UserAggregateArgs) {
  //   return this.userController.aggregate(userAggregateArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userCount(@Args() userCountAggregateInput: FindManyUserArgs) {
  //   return this.userController.count(userCountAggregateInput);
  // }
}
