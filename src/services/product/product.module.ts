import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaService } from '../../prisma.service';
import { ProductController } from './product.controller';

@Module({
  providers: [PrismaService, ProductResolver, ProductController, ProductService],
  exports: [ProductController],
})
export class ProductModule {}
