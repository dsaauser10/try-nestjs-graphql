import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductService } from './product.service';

@Injectable()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  async createOne(productCreateArgs: Prisma.ProductCreateArgs) {
    return await this.productService.createOne(productCreateArgs);
  }

  async createMany(productCreateManyArgs: Prisma.ProductCreateManyArgs) {
    return await this.productService.createMany(productCreateManyArgs);
  }

  async findOne(productFindUniqueArgs: Prisma.ProductFindUniqueArgs) {
    return await this.productService.findOne(productFindUniqueArgs);
  }

  async findMany(productFindManyArgs: Prisma.ProductFindManyArgs) {
    return await this.productService.findMany(productFindManyArgs);
  }

  async findFirst(productFindFirstArgs: Prisma.ProductFindFirstArgs) {
    return await this.productService.findFirst(productFindFirstArgs);
  }

  async updateOne(productUpdateOneArgs: Prisma.ProductUpdateArgs) {
    return await this.productService.updateOne(productUpdateOneArgs);
  }

  async updateMany(productUpdateManyArgs: Prisma.ProductUpdateManyArgs) {
    return await this.productService.updateMany(productUpdateManyArgs);
  }

  async delete(productDeleteArgs: Prisma.ProductDeleteArgs) {
    return await this.productService.delete(productDeleteArgs);
  }

  async deleteMany(productDeleteManyArgs: Prisma.ProductDeleteManyArgs) {
    return await this.productService.deleteMany(productDeleteManyArgs);
  }

  async aggregate(productAggregateArgs: Prisma.ProductAggregateArgs) {
    return await this.productService.aggregate(productAggregateArgs);
  }

  async count(productCountArgs: Prisma.ProductCountArgs) {
    return await this.productService.count(productCountArgs);
  }
}
