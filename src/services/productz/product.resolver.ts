import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductController } from './product.controller';
import {
  CreateOneProductArgs,
  Product,
  FindManyProductArgs,
  UpdateOneProductArgs,
  DeleteOneProductArgs,
} from 'src/@generated';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productcontroller: ProductController) {}

  @Mutation(() => Product, {
    nullable: true,
    description: 'create a new product',
  })
  async productCreateOne(
    @Args()
    productCreateArgs: CreateOneProductArgs,
  ): Promise<Product | void> {
    return await this.productcontroller.createProduct({ ...productCreateArgs });
  }

  @Query(() => [Product], {
    nullable: true,
    description: 'get all products',
  })
  async productFindMany(
    @Args() productFindManyArgs: FindManyProductArgs,
  ): Promise<Product[] | void> {
    return this.productcontroller.getAllProducts();
  }

  @Mutation(() => Product, {
    nullable: true,
    description: 'update a product',
  })
  async productUpdateOne(
    @Args()
    productUpdateArgs: UpdateOneProductArgs,
  ): Promise<Product | void> {
    return await this.productcontroller.updateOne({
      where: { id: productUpdateArgs.where.id },
      data: { ...productUpdateArgs.data },
    });
  }

  @Mutation(() => Product, {
    nullable: true,
    description: 'delete a product',
  })
  async productDeleteOne(
    @Args()
    productDeleteArgs: DeleteOneProductArgs,
  ): Promise<Product | void> {
    return await this.productcontroller.deleteOne({
      where: { id: productDeleteArgs.where.id },
    });
  }
}
