import { Injectable,signal } from "@angular/core";
import { Signal } from "@angular/core";

export class favoritosServices {
    private favoritos = signal<string[]>([]);
    listaFavoritos(){
    return this.favoritos;
    }
    adicionarFavoritos(produtoId:string){
    this.favoritos.update(lista => [...lista, produtoId])
    };
    

}