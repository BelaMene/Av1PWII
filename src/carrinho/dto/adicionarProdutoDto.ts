import { IsInt, IsPositive } from 'class-validator';

export class AddProdutoCarrinhoDto {
  @IsInt()
  @IsPositive()
  produtoId: number;

  @IsInt()
  @IsPositive()
  quantidade: number;
}
