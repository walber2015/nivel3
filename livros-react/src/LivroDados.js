import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Livro } from './modelo/Livro'

export default function LivroDados({ controleLivro, controleEditora }) {

    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();

        const autoresArray = autores.split('\n').map((autor) => autor.trim());

        const novoLivro = new Livro(0, codEditora, titulo, resumo, autoresArray);

        controleLivro.incluir(novoLivro);

        navigate('/');
    };

    return (
        <main className='container'>
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="form-group d-flex flex-column">
                    <label htmlFor="titulo">Título</label>
                    <input class="form-control"
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(event) => setTitulo(event.target.value)}
                    />
                </div>
                <div className="form-group  d-flex flex-column">
                    <label htmlFor="resumo">Resumo</label>
                    <textarea class="form-control"
                        id="resumo"
                        value={resumo}
                        onChange={(event) => setResumo(event.target.value)}
                    />
                </div>
                <div className="form-group  d-flex flex-column">
                    <label htmlFor="editora">Editora</label>
                    <select class="form-control" id="editora" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group  d-flex flex-column">
                    <label htmlFor="autores">Autores (1 por linha)</label>
                    <textarea class="form-control"
                        id="autores"
                        value={autores}
                        onChange={(event) => setAutores(event.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Salvar dados
                </button>
            </form>
        </main>
    );
}

