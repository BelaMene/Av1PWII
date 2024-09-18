import { Controller, Get, Param, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { AdicionarProdutoDto } from './dto/create-produto.dto.ts';
import { ParseIntPipe } from 'src/parse-int.pipe';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.findOne(id);
  }

 
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createProdutoDto: AdicionarProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }
}
