import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
// import { IGraphQLError } from '../../utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(ProductService.name);

  async createOne(productCreateArgs: Prisma.ProductCreateArgs) {
    try {
      return await this.prisma.product.create(productCreateArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async createMany(productCreateManyArgs: Prisma.ProductCreateManyArgs) {
    try {
      return await this.prisma.product.createMany(productCreateManyArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async findOne(productFindUniqueArgs: Prisma.ProductFindUniqueArgs) {
    try {
      return await this.prisma.product.findUnique(productFindUniqueArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async findMany(productFindManyArgs: Prisma.ProductFindManyArgs) {
    try {
      return await this.prisma.product.findMany(productFindManyArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async findFirst(productFindFirstArgs: Prisma.ProductFindFirstArgs) {
    try {
      return await this.prisma.product.findFirst(productFindFirstArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async updateOne(productUpdateOneArgs: Prisma.ProductUpdateArgs) {
    try {
      return await this.prisma.product.update(productUpdateOneArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async updateMany(productUpdateManyArgs: Prisma.ProductUpdateManyArgs) {
    try {
      return await this.prisma.product.updateMany(productUpdateManyArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async delete(productDeleteArgs: Prisma.ProductDeleteArgs) {
    try {
      await this.prisma.product.delete(productDeleteArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async deleteMany(productDeleteManyArgs: Prisma.ProductDeleteManyArgs) {
    try {
      await this.prisma.product.deleteMany(productDeleteManyArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async aggregate(productAggregateArgs: Prisma.ProductAggregateArgs) {
    try {
      return await this.prisma.product.aggregate(productAggregateArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }

  async count(productCountArgs: Prisma.ProductCountArgs) {
    try {
      return await this.prisma.product.count(productCountArgs);
    } catch (err) {
      this.logger.error(err);
      throw error;
    }
  }
}
