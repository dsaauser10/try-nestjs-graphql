import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(productCreateArgs: Prisma.ProductCreateArgs) {
    try {
      return this.prisma.product.create(productCreateArgs);
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts() {
    try {
      return this.prisma.product.findMany();
    } catch (error) {
      throw error;
    }
  }
}
