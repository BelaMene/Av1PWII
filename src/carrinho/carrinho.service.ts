import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CarrinhoService {
  constructor(private readonly prisma: PrismaService) {}

  async adicionarProduto(produtoId: number, quantidade: number) {
    return this.prisma.carrinho.create({
      data: {
        quantidade,
        produto: {
          connect: { id: produtoId },
        },
      },
    });
  }

  async removerProduto(produtoId: number) {
    return this.prisma.carrinho.delete({
      where: { id:produtoId },
    });
  }
}
