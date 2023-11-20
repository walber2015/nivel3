import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { ControleEditora } from '../classes/ControleEditora';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/page.module.css';
import { Livro } from '../modelo/Livro';

const controleEditora = new ControleEditora();
const baseURL = "http://localhost:3000/api/livros";

const LivroDados: React.FC = () => {
  const [opcoes, setOpcoes] = useState<Array<{ value: number; text: string }>>([]);
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const editoras = controleEditora.getEditoras();
    const opcoesEditoras = editoras.map((editora) => ({
      value: editora.getCodEditora(),
      text: editora.getNome(),
    }));
    setOpcoes(opcoesEditoras);
  }, []);

  const incluirLivro = async (livro: Livro) => {
    try {
      const resposta = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });
      return resposta.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  };

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoLivro = new Livro(0, 0, "", "", [""]);
    novoLivro.setCodigo(0);
    novoLivro.setCodEditora(codEditora);
    novoLivro.setTitulo(titulo);
    novoLivro.setResumo(resumo);
    novoLivro.setAutores(autores.split('\n').map((autor) => autor.trim()));


    const sucesso = await incluirLivro(novoLivro);
    if (sucesso) {
      router.push('/LivroLista');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LivroDados</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Incluir Livro</h1>
        <form onSubmit={incluir} className='w-100'>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label text-dark">
              Título
            </label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label text-dark">
              Resumo
            </label>
            <textarea
              className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label text-dark">
              Autores (um por linha)
            </label>
            <textarea
              className="form-control"
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="codEditora" className="form-label text-dark">
              Editora
            </label>
            <select
              className="form-select"
              id="codEditora"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Incluir
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
