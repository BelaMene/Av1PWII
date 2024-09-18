import { CarrinhoService } from './carrinho.service';
import { AdicionarProdutoDto } from 'src/produtos/dto/create-produto.dto.ts';
export declare class CarrinhoController {
    private readonly carrinhoService;
    constructor(carrinhoService: CarrinhoService);
    adicionarProduto(produtoId: number, adicionarProdutoDto: AdicionarProdutoDto): Promise<{
        id: number;
        produtoId: number;
        quantidade: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removerProduto(produtoId: number): Promise<{
        id: number;
        produtoId: number;
        quantidade: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
