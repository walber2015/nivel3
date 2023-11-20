import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/ControleEditora';

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const codEditora = parseInt(req.query.codEditora as string, 10);
      const nomeEditora = controleEditora.getNomeEditora(codEditora);
      if (nomeEditora) {
        res.status(200).json({ nome: nomeEditora });
      } else {
        res.status(404).json({ error: 'Editora não encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
    }
  } else {
    res.status(405).end();
  }
};
