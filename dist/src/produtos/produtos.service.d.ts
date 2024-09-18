import { PrismaService } from 'prisma/prisma.service';
import { AdicionarProdutoDto } from './dto/create-produto.dto.ts.js';
export declare class ProdutosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProdutoDto: AdicionarProdutoDto): Promise<{
        id: number;
        nome: string;
        preco: number;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        preco: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        preco: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        preco: number;
    }>;
}
