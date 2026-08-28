import { Injectable, inject } from "@angular/core";
import {ItemFavorito} from "../models/favorito-item";
import { favoritosServices } from "../services/favoritos.service";
import { ProdutoLoja } from "../models/produto-loja";
@Injectable({providedIn:'root'})
export class FavoriteFacade {

    private favorService = inject(favoritosServices);
    itensFavorito = this.favoritoService.
}