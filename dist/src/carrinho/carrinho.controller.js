"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoController = void 0;
const common_1 = require("@nestjs/common");
const carrinho_service_1 = require("./carrinho.service");
const create_produto_dto_ts_1 = require("../produtos/dto/create-produto.dto.ts");
let CarrinhoController = class CarrinhoController {
    constructor(carrinhoService) {
        this.carrinhoService = carrinhoService;
    }
    adicionarProduto(produtoId, adicionarProdutoDto) {
        return this.carrinhoService.adicionarProduto(produtoId, adicionarProdutoDto.quantidade);
    }
    removerProduto(produtoId) {
        return this.carrinhoService.removerProduto(produtoId);
    }
};
exports.CarrinhoController = CarrinhoController;
__decorate([
    (0, common_1.Post)('adicionar/:produtoId'),
    __param(0, (0, common_1.Param)('produtoId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_produto_dto_ts_1.AdicionarProdutoDto]),
    __metadata("design:returntype", void 0)
], CarrinhoController.prototype, "adicionarProduto", null);
__decorate([
    (0, common_1.Delete)('remover/:produtoId'),
    __param(0, (0, common_1.Param)('produtoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarrinhoController.prototype, "removerProduto", null);
exports.CarrinhoController = CarrinhoController = __decorate([
    (0, common_1.Controller)('carrinho'),
    __metadata("design:paramtypes", [carrinho_service_1.CarrinhoService])
], CarrinhoController);
//# sourceMappingURL=carrinho.controller.js.map