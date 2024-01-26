import { Injectable } from '@nestjs/common';
import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  async createProduct(productCreateArgs: Prisma.ProductCreateArgs) {
    return await this.productService.createProduct(productCreateArgs);
  }

  async getAllProducts() {
    return await this.productService.getAllProducts();
  }
}
