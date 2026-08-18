import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {  RouterLink } from '@angular/router';
import {Router} from "@angular/router"
import { CarrinhoService } from '../../../core/services/carrinho.service';
import{ AuthService} from '../../../core/services/auth.service';
import { inject } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [ MatToolbarModule ,MatButtonModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja ='Mercado seu dinheiro nossa alegria';
  private carrinhoService = inject(CarrinhoService);
  private authService = inject(AuthService);
  quantidadeHeader = this.carrinhoService.quantidadeItens;
  usuarioAtual = this.authService.usuarioAtual;
  usuarioLogado = this.authService.usuarioLogado;

  private router = inject(Router);

sair(){ 
  this.authService.logout();
  this.router.navigateByUrl('/login');
}
}