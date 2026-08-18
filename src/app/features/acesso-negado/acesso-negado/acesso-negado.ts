import { Component, inject } from '@angular/core';
import {RouterLink, Router} from "@angular/router";
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-acesso-negado',
  imports: [RouterLink],
  templateUrl: './acesso-negado.html',
  styleUrl: './acesso-negado.css',
})
export class AcessoNegado {
   private router = inject(Router);
   private authService = inject(AuthService);

   sair(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
    return;
   }
}
