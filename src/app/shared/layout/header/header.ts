import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {  RouterLink } from '@angular/router';
import {Router} from "@angular/router"
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { AuthFacade } from '../../../core/facades/auth.facade';
import { inject } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [ MatToolbarModule ,MatButtonModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja ='Mercado seu dinheiro nossa alegria';
  private carrinhoFacade = inject(CarrinhoFacade);
 quantidadeHeader = this.carrinhoFacade.quantidadeCarrinho;
  
 private authFacade = inject(AuthFacade);
  usuarioAtual = this.authFacade.usuarioAtual;
  usuarioLogado = this.authFacade.usuarioLogado;

  private router = inject(Router);

sair(){ 
  this.authFacade.sair();
  this.router.navigateByUrl('/login');
}
}