import { NextApiRequest, NextApiResponse } from 'next';
import controleLivro from '../../../classes/ControleLivroSingleton';
import { Livro } from '@/modelo/Livro';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
    }
  } else if (req.method === 'POST') {
    try {
      const { codEditora, titulo, autores, resumo } = req.body;
      const novoLivro = new Livro(0, codEditora, titulo, resumo, autores);
      controleLivro.incluir(novoLivro);
      res.status(200).json({ mensagem: 'Livro adicionado com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
    }
  } else {
    res.status(405).end();
  }
};
