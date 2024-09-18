import { IsString, IsInt, IsPositive, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AdicionarProdutoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Produto Exemplo', description: 'Nome do produto' })
  nome: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({ example: 100, description: 'Preço do produto em centavos' })
  preco: number;
}
