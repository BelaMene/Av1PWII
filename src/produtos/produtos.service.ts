import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AdicionarProdutoDto } from './dto/create-produto.dto.ts.js';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  async create(createProdutoDto: AdicionarProdutoDto) {
        return this.prisma.produto.create({
          data: {
            nome: createProdutoDto.nome,
            preco: createProdutoDto.preco,
          },
        });
      }

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async findOne(id: number) {
    return this.prisma.produto.findUnique({ where: { id } });
  }


  async remove(id: number) {
    return this.prisma.produto.delete({ where: { id } });
  }
}
