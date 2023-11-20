import React from 'react'
import { Editora } from "../modelo/Editora";

class ControleEditora {
  private editoras: Editora[];

  constructor() {

    this.editoras = [
      new Editora(0, "Alta Books"),
      new Editora(1, "Pearson"),
      new Editora(2, "Addison Wesley")
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.getCodEditora() === codEditora);
    return editora ? editora.getNome() : undefined;
  }
}

export { ControleEditora };
