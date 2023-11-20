import React, { useState, useEffect } from 'react';
import { ControleEditora } from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td class="d-flex flex-column">
                {livro.titulo}
                <button class=" btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.resumo}</td>

            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}

export default function LivroLista({ controleLivro }) {
    const [livros, setLivros] = useState([]);
    console.log(livros);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            const novosLivros = controleLivro.obterLivros();
            setLivros(novosLivros);
            setCarregado(true);
        }
    }, [carregado, controleLivro]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        const livrosRestantes = livros.filter(livro => livro.codigo !== codigo);
        setLivros(livrosRestantes);
        setCarregado(false);
    };


    return (
        <div>
            <main class="container">
                <h1>Catálogo de Livros</h1>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Resumo</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Autores</th>

                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro livro={livro} key={livro.codigo} excluir={excluir} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
