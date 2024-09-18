import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos/produtos.controller';
import { CarrinhoController } from './carrinho/carrinho.controller';
import { ProdutosService } from './produtos/produtos.service';
import { CarrinhoService } from './carrinho/carrinho.service';
import { ParseIntPipe } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController, CarrinhoController],
  providers: [AppService, PrismaService, ProdutosService, CarrinhoService, ParseIntPipe],
})
export class AppModule {}
