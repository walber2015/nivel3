import React from 'react'
import { Livro } from '../modelo/Livro';

class ControleLivro {
  livros: Livro[];

  constructor() {
    this.livros = [
      new Livro(1, 0, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.", ["Bert Bates", "Kathy Sierra"]),
      new Livro(2, 1, "Java, como Programar", "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel", ["Paul Deitel", "Harvey Deitel"]),
      new Livro(3, 2, "Core Java for the Impatient", `Readers familiar with Horstmann's original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.`, ["Cay Horstmann"])
    ];
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = this.livros.reduce((max, l) => (l.getCodigo() > max ? l.getCodigo() : max), 0);
    if (livro instanceof Livro) {
      livro.setCodigo(maxCodigo + 1);
      this.livros.push(livro);
      console.log("Livro adicionado na lista:");
      this.livros.forEach((livro) => {
        console.log(`Código: ${livro.getCodigo()}, Título: ${livro.getTitulo()}, ${livro.resumo}, ${livro.autores}`);
      });
    } else {
      console.error('Não é uma instância de Livro');
    }
  }


  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.getCodigo() === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

export { ControleLivro };
