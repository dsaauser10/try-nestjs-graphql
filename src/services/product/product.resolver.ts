import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductController } from './product.controller';
import {
  CreateOneProductArgs,
  Product,
  FindManyProductArgs,
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
}
