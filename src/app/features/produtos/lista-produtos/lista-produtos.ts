import { Component, computed, effect, inject, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { Produto } from '../../produtos/produto/produto';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { produtosService } from '../../../core/services/produtos.service';
import { CarrinhoService } from '../../../core/services/carrinho.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [
    Produto,
    PrecoFormatadoPipe,
    UpperCasePipe
  ],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  // INJEÇÃO DOS SERVIÇOS
  private produtosService = inject(produtosService);
  public carrinhoService = inject(CarrinhoService);

  // SIGNAL
  produtos = signal<{ nome: string; preco: number }[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  // Produto selecionado
  produtoSelecionado = signal<string | null>(null);

  // Quantidade e total do carrinho
  quantidadeCarrinho = this.carrinhoService.quantidadeItens;
  totalCarrinho = this.carrinhoService.totalItens;

  // Exibir produto selecionado
  exibirProduto(nome: string) {
    console.log('Produto Selecionado:', nome);
    this.produtoSelecionado.set(nome);
  }

  // Adicionar produto
  adicionarProduto() {
    this.produtos.update(listaAtual => [
      ...listaAtual,
      {
        nome: 'Playstation 5',
        preco: 3000
      }
    ]);
  }

  // Quantidade total de produtos
  totalProdutos = computed(() =>
    this.produtos().length
  );

  // Valor total dos produtos
  valorTotal = computed(() =>
    this.produtos().reduce(
      (total, item) => total + item.preco,
      0
    )
  );

  // Substituir produtos
  substituirProdutos() {
    this.produtos.set([
      { nome: 'Teclado', preco: 50 },
      { nome: 'Mouse', preco: 15 },
      { nome: 'Monitor', preco: 500 },
      { nome: 'Desktop', preco: 1500 },
      { nome: 'Headset', preco: 30 },
    ]);
  }

  // Carregar produtos da API
  carregarProdutos() {
    this.erro.set(null);
    this.carregando.set(true);

    this.produtosService.buscarProdutos().subscribe({
      next: (dados) => {
        const produtos =
          this.produtosService.transformarProdutos(dados);

        this.produtos.set(produtos);
        this.carregando.set(false);
      },

      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);

        this.erro.set(
          'Erro ao carregar produtos. Por favor, tente novamente!'
        );

        this.carregando.set(false);
      }
    });
  }

  // Adicionar ao carrinho
  adicionarAoCarrinho(
    produto: { nome: string; preco: number }
  ) {
    this.carrinhoService.adicionar(produto);
  }

  constructor() {

    // Carregar API
    this.carregarProdutos();

    // Monitorar alterações nos produtos
    effect(() => {
      console.log(
        'Lista de produtos alterada:',
        this.produtos()
      );
    });

    // Monitorar valor total
    effect(() => {
      console.log(
        'Valor total atualizado:',
        this.valorTotal()
      );
    });

    // Atualizar título da página
    effect(() => {
      if (typeof document !== 'undefined') {
        document.title =
          `(${this.totalProdutos()}) - Loja da Vitória`;
      }
    });
  }
}