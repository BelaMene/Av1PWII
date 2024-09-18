import { Controller, Post, Delete, Param, Body } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { AdicionarProdutoDto } from 'src/produtos/dto/create-produto.dto.ts';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post('adicionar/:produtoId')
  adicionarProduto(
    @Param('produtoId') produtoId: number,
    @Body() adicionarProdutoDto: AdicionarProdutoDto,
  ) {
    return this.carrinhoService.adicionarProduto(produtoId, adicionarProdutoDto.quantidade);
  }

  @Delete('remover/:produtoId')
  removerProduto(@Param('produtoId') produtoId: number) {
    return this.carrinhoService.removerProduto(produtoId);
  }
}
