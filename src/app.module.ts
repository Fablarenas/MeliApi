import { Module } from '@nestjs/common';
import { ProductController } from './products/api/productController';
import { MercadoLibreService } from './products/infraestructure/services/MercadoLibreService'
import { ProductApplication } from './products/application/ProductApplication';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ProductController],
  providers: [MercadoLibreService, ProductApplication],
})
export class AppModule {}
