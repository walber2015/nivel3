import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import { ControleLivros } from './controle/ControleLivro';
import { ControleEditora } from './controle/ControleEditora';


function App() {

    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();


    return (
        <div className="App">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link to="/" className="nav-link text-light">
                                Livros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="dados" className="nav-link text-light">
                                Novo
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/" element={<LivroLista
                                            controleLivro={controleLivro}
                                        />} />
                    <Route path="/dados" element={<LivroDados
                            controleLivro={controleLivro}
                            controleEditora={controleEditora}
                    />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
