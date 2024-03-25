// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from '../../utils/relations.decorator';
import {
  AggregateProduct,
  CreateManyProductArgs,
  CreateOneProductArgs,
  DeleteManyProductArgs,
  DeleteOneProductArgs,
  FindFirstProductArgs,
  FindManyProductArgs,
  FindUniqueProductArgs,
  Product,
  ProductAggregateArgs,
  UpdateManyProductArgs,
  UpdateOneProductArgs,
} from '../../@generated';
import { ProductController } from './product.controller';
import BatchPayload from '../../model/batch-payload.model';
import { replaceNullWithUndefined } from '../../utils/replace-null-with-undefined.function';
// import { UseGuards } from '@nestjs/common';
// import { RequiredPermission } from 'src/decorator/permission.decorator';
// import { PermissionGuard } from '../role-permission/role-permission.guard';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface ProductSelect {
  select: Prisma.ProductSelect;
}

// @UseGuards(JwtAuthGuard)
@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productController: ProductController) {}

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Product, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productCreateOne(
  //   @Args()
  //   productCreateArgs: CreateOneProductArgs,
  //   @Relations() relations: ProductSelect,
  // ): Promise<Product | void> {
  //   return await this.productController.createOne({
  //     ...replaceNullWithUndefined(productCreateArgs),
  //     select: relations.select,
  //   });
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productCreateMany(
  //   @Args()
  //   createManyProductArgs: CreateManyProductArgs,
  // ) {
  //   return await this.productController.createMany(
  //     replaceNullWithUndefined(createManyProductArgs),
  //   );
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => Product, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // productFindOne(
  //   @Args()
  //   productFindUniqueArgs: FindUniqueProductArgs,
  //   @Relations() relations: ProductSelect,
  // ): Promise<Product | void> {
  //   return this.productController.findOne({
  //     ...replaceNullWithUndefined(productFindUniqueArgs),
  //     select: relations.select,
  //   });
  // }

  // @RequiredPermission(Permission.CREATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Query(() => [Product], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  productFindMany(
    @Args() productFindManyArgs: FindManyProductArgs,
    @Relations() relations: ProductSelect,
  ) {
    return this.productController.findMany({
      ...replaceNullWithUndefined(productFindManyArgs),
      select: relations.select,
    });
  }

  // @RequiredPermission(Permission.CREATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Query(() => Product, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  productFindFirst(
    @Args()
    findFirstProductArgs: FindFirstProductArgs,
    @Relations() relations: ProductSelect,
  ): Promise<Product | void> {
    return this.productController.findFirst({
      ...replaceNullWithUndefined(findFirstProductArgs),
      select: relations.select,
    });
  }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Product, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productUpdateOne(
  //   @Args() productUpdateOneArgs: UpdateOneProductArgs,
  //   @Relations() relations: ProductSelect,
  // ) {
  //   return this.productController.updateOne({
  //     ...replaceNullWithUndefined(productUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productUpdateMany(@Args() updateManyProductArgs: UpdateManyProductArgs) {
  //   return this.productController.updateMany(
  //     replaceNullWithUndefined(updateManyProductArgs),
  //   );
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productDeleteOne(@Args() deleteOneProductArgs: DeleteOneProductArgs) {
  //   return this.productController.delete(deleteOneProductArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productDeleteMany(@Args() deleteManyProductArgs: DeleteManyProductArgs) {
  //   return this.productController.deleteMany(deleteManyProductArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => AggregateProduct, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // productAggregate(@Args() productAggregateArgs: ProductAggregateArgs) {
  //   return this.productController.aggregate(productAggregateArgs);
  // }

  // // @RequiredPermission(Permission.CREATE_CLAIM)
  // // @UseGuards(PermissionGuard)
  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // productCount(@Args() productCountAggregateInput: FindManyProductArgs) {
  //   return this.productController.count(productCountAggregateInput);
  // }
}
