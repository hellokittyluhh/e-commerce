import { Injectable, inject } from "@angular/core";
import { CarrinhoService} from "../services/carrinho.service";
import { ItemCarrinho } from "../moldes/item-carrinho";
type itemCarrinho ={
    nome: string;
    preco: number;
}
        

@Injectable ({providedIn:'root'})

export class CarrinhoFacade {
    private carrinhoService = inject(CarrinhoService);

    itensCarrinho = this.carrinhoService.itens;
    quantidadeCarrinho = this.carrinhoService.quantidadeItens;
    totalCarrinho =this.carrinhoService.totalItens;
    carrinhoVazio = this.carrinhoService.carrinhoVazio;

    adicionarProdutoCarrinho(produto:itemCarrinho){
        this.carrinhoService.adicionar(produto);
    }
limparCarrinho(){
    this.carrinhoService.limpar();
}
  removerItem(rmvItem: number){
    this.carrinhoService.removerItem(rmvItem);
  }
}