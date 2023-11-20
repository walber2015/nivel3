import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';
import { Livro } from '../modelo/Livro';
import styles from '../styles/page.module.css';
import { useState, useEffect } from 'react';

const LivroLista: React.FC = () => {
  const baseURL = "http://localhost:3000/api/livros";
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    try {
      const resposta = await fetch(baseURL);
      const dados = await resposta.json();
      setLivros(dados);
    } catch (error) {
      console.error('Erro ao obter livros:', error);
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      return resposta.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  };

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  useEffect(() => {
    if (!carregado) {
      obterLivros().then(() => setCarregado(true));
    }
  }, [carregado]);

  return (
    <div className={styles.container}>
      <Head>
        <title>LivroLista</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />

            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
