// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from '../../utils/relations.decorator';
import {
  AggregateFile,
  CreateManyFileArgs,
  CreateOneFileArgs,
  DeleteManyFileArgs,
  DeleteOneFileArgs,
  FindFirstFileArgs,
  FindManyFileArgs,
  FindUniqueFileArgs,
  File,
  FileAggregateArgs,
  UpdateManyFileArgs,
  UpdateOneFileArgs,
} from '../../@generated';
import { FileController } from './file.controller';
import BatchPayload from '../../model/batch-payload.model';
import { replaceNullWithUndefined } from '../../utils/replace-null-with-undefined.function';
// import { UseGuards } from '@nestjs/common';
// import { RequiredPermission } from 'src/decorator/permission.decorator';
// import { PermissionGuard } from '../role-permission/role-permission.guard';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface FileSelect {
  select: Prisma.FileSelect;
}

// @UseGuards(JwtAuthGuard)
@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileController: FileController) {}

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => File, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async fileCreateOne(
  //   @Args()
  //   fileCreateArgs: CreateOneFileArgs,
  //   @Relations() relations: FileSelect,
  // ): Promise<File | void> {
  //   return await this.fileController.createOne({
  //     ...replaceNullWithUndefined(fileCreateArgs),
  //     select: relations.select,
  //   });
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async fileCreateMany(
  //   @Args()
  //   createManyFileArgs: CreateManyFileArgs,
  // ) {
  //   return await this.fileController.createMany(
  //     replaceNullWithUndefined(createManyFileArgs),
  //   );
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => File, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // fileFindOne(
  //   @Args()
  //   fileFindUniqueArgs: FindUniqueFileArgs,
  //   @Relations() relations: FileSelect,
  // ): Promise<File | void> {
  //   return this.fileController.findOne({
  //     ...replaceNullWithUndefined(fileFindUniqueArgs),
  //     select: relations.select,
  //   });
  // }

  // @RequiredPermission(Permission.CREATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Query(() => [File], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileFindMany(
    @Args() fileFindManyArgs: FindManyFileArgs,
    @Relations() relations: FileSelect,
  ) {
    return this.fileController.findMany({
      ...replaceNullWithUndefined(fileFindManyArgs),
      select: relations.select,
    });
  }

  // @RequiredPermission(Permission.CREATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Query(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileFindFirst(
    @Args()
    findFirstFileArgs: FindFirstFileArgs,
    @Relations() relations: FileSelect,
  ): Promise<File | void> {
    return this.fileController.findFirst({
      ...replaceNullWithUndefined(findFirstFileArgs),
      select: relations.select,
    });
  }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => File, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async fileUpdateOne(
  //   @Args() fileUpdateOneArgs: UpdateOneFileArgs,
  //   @Relations() relations: FileSelect,
  // ) {
  //   return this.fileController.updateOne({
  //     ...replaceNullWithUndefined(fileUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async fileUpdateMany(@Args() updateManyFileArgs: UpdateManyFileArgs) {
  //   return this.fileController.updateMany(
  //     replaceNullWithUndefined(updateManyFileArgs),
  //   );
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async fileDeleteOne(@Args() deleteOneFileArgs: DeleteOneFileArgs) {
  //   return this.fileController.delete(deleteOneFileArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async fileDeleteMany(@Args() deleteManyFileArgs: DeleteManyFileArgs) {
  //   return this.fileController.deleteMany(deleteManyFileArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => AggregateFile, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // fileAggregate(@Args() fileAggregateArgs: FileAggregateArgs) {
  //   return this.fileController.aggregate(fileAggregateArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // fileCount(@Args() fileCountAggregateInput: FindManyFileArgs) {
  //   return this.fileController.count(fileCountAggregateInput);
  // }
}
