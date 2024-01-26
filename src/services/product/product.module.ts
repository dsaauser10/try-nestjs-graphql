import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductResolver } from './product.resolver';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  providers: [
    PrismaService,
    ProductResolver,
    ProductController,
    ProductService,
  ],
  exports: [ProductController],
})
export class ProductModule {}
