import { PrismaService } from 'prisma/prisma.service';
export declare class CarrinhoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    adicionarProduto(produtoId: number, quantidade: number): Promise<{
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
