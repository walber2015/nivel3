class Editora {
  private codEditora: number;
  private nome: string;

  constructor(codEditora: number, nome: string) {
    this.codEditora = codEditora;
    this.nome = nome;
  }

  getCodEditora(): number {
    return this.codEditora;
  }

  setCodEditora(codEditora: number): void {
    this.codEditora = codEditora;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }
}

export { Editora };
