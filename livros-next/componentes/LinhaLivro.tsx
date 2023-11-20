import { ControleEditora } from '../classes/ControleEditora';
import { Livro } from '../modelo/Livro';

interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;

    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td className="d-flex flex-column">
                {livro.titulo}
                <button className=" btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
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
};
