import { Component,Input, Output,EventEmitter} from '@angular/core';
import{ UpperCasePipe , CurrencyPipe} from '@angular/common';
import {PrecoFormatadoPipe} from '../../../shared/pipes/preco-formatado-pipe';
@Component( { 
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
} )
// adicionar a classe de Produto ,variavel condicional
export class Produto {
  //entrada de dados da lista Produto em lista-produtos
  @Input() nome: string = '';
  @Input() preco: number = 0 ; 
 //saída de dados selecionado para lista-produtos
  @Output() produtoSelecionado=new EventEmitter<string>();
  selecionarProduto(){
    this.produtoSelecionado.emit(this.nome);
  }
}