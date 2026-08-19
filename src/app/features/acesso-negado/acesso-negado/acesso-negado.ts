import { Component, inject } from '@angular/core';
import {RouterLink, Router} from "@angular/router";
import { AuthFacade } from "../../../core/facades/auth.facade";
import { MatAnchor } from "@angular/material/button";
@Component({
  selector: 'app-acesso-negado',
  imports: [RouterLink, MatAnchor],
  templateUrl: './acesso-negado.html',
  styleUrl: './acesso-negado.css',
})
export class AcessoNegado {
   private router = inject(Router);
   private authFacade = inject(AuthFacade);

   sair(){
    this.authFacade.sair();
    this.router.navigateByUrl('/login');
    return;
   }
}
