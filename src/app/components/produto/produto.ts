import { Component } from '@angular/core';
import{ UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// adicionar a classe de Produto ,variavel condicional
export class Produto {
  produto = 'Notebook Gamer';
  preco = 5000;
  mostrarProduto = true;
  mostrarPreco = true;
  produtos =[
    {nome: 'Teclado', preco: 49.99},
    {nome: 'Mouse', preco:29.99},
    {nome: 'Monitor', preco: 149.99},
  ];
}