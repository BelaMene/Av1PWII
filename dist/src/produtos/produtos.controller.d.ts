import { ProdutosService } from './produtos.service';
import { AdicionarProdutoDto } from './dto/create-produto.dto.ts';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        preco: number;
    }>;
    create(createProdutoDto: AdicionarProdutoDto): Promise<{
        id: number;
        nome: string;
        preco: number;
    }>;
}
