import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';// remove a importação do RouterOutlet,pois não é necessário para o funcionamento para esse componente
//import {Produto} from './components/produto/produto';// importaqndo a classe de produto do arquivo produto.ts
import {ListaProdutos} from './features/produtos/lista-produtos/lista-produtos'; 
@Component({
  selector: 'app-root',
  imports:[ListaProdutos],
  templateUrl: './app.html',
  styleUrl:'./app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
