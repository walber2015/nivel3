class Livro {
  private codigo: number;
  private codEditora: number;
  private titulo: string;
  private resumo: string;
  private autores: string[];

  constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }

  getCodigo(): number {
    return this.codigo;
  }

  setCodigo(codigo: number): void {
    this.codigo = codigo;
  }

  getCodEditora(): number {
    return this.codEditora;
  }

  setCodEditora(codEditora: number): void {
    this.codEditora = codEditora;
  }

  getTitulo(): string {
    return this.titulo;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  getResumo(): string {
    return this.resumo;
  }

  setResumo(resumo: string): void {
    this.resumo = resumo;
  }

  getAutores(): string[] {
    return this.autores;
  }

  setAutores(autores: string[]): void {
    this.autores = autores;
  }
}

export { Livro };