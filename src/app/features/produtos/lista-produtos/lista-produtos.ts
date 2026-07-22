import { Component} from '@angular/core';
import {Produto} from '../../produtos/produto/produto';
import {signal} from '@angular/core';
import {computed} from '@angular/core';
import {PrecoFormatadoPipe} from '../../../shared/pipes/preco-formatado-pipe';
import{effect}from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {  
  //lista com dados-Array   
  produtos = signal(  [
{ nome: 'Mouse Gamer', preco: 229.99 },
{nome : 'Teclado Mecanico', preco: 129.99},
{ nome: 'Monitor Gamer', preco: 999.99},
  ]);
  //função para exibir produtos selecionados
  exibirProduto(nome:string){
    console.log('Produto Selecionado :',nome);
    this.produtoSelecionado.set(nome);
  }
  //!função que adicionar produtos usando método update ()
  adicionarProduto(){
    this.produtos.update(ListaAtual=>[
      ...ListaAtual,
      {nome:'Playstation5', preco: 3000}
    ]);
  }
 //! função que contabiliza a quantidade de item na lista
 totalProdutos = computed(()=> this.produtos().length);
 //função que remove produtos usando método computed()
 valorTotal = computed(()=>
 {return this.produtos().reduce((total,item) =>
  total +item.preco,0)
//!função que substituir
});
substituirProdutos() {
  this.produtos.set([
    { nome: 'Teclado', preco: 50 },
    { nome: 'Mouse', preco: 15 },
    { nome: 'Monitor', preco: 500 },
    { nome: 'Desktop', preco: 1500},
    { nome: 'Headset', preco: 30 },
  ]);
}
//método para monitorar alterações em tempo real usando o método effect()
constructor(){
  effect(() => {
    console.log('Lista de produtos Alterados:', this.produtos());
  });
   effect(() => {
    console.log(' Valor Total Atualizados:', this.valorTotal());
   });
   effect(() => {
    if(typeof document !== 'undefined'){
      document.title = `(${this.totalProdutos()})-loja da Vitoria`
    }
   });
 } 
 //! método para criar um estado de seleção com signal string | null
 produtoSelecionado= signal<string | null>(null);
 //!metodo para criar um estado paracarrinho com signal 
 carrinho = signal<{nome:string; preco:number}[]>([]);
 adicionarAoCarrinho(produto:{nome:string; preco:number}){
     this.carrinho.update(listaAtual => [...listaAtual,produto]
        );
          }
 //! totalProdutos = computed ( ()=> this.produtyos().length)
 //metodo para calcular a quantidade de itens no carrinho
 quantidadeCarrinho = computed(() => this.carrinho().length);
 //metodo para calcular o valor total dos itens do carrinho
 totalCarrinho = computed(() => {
  return this.carrinho().reduce( (total, item) =>
  total + item.preco,0)});
 }

