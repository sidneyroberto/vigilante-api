import { Router } from 'express';

import AtropelamentoController from '../controllers/AtropelamentoController';

const router = Router();
const atropelamentoCtrl = new AtropelamentoController();

router.get('/especie/:id', async (req, res) => {
    const { id } = req.params;
    const especies = await atropelamentoCtrl.recuperarPorEspecie(id);
    res.json(especies);
});

router.get('/', async (req, res) => {
    const atropelamentos = await atropelamentoCtrl.recuperarTodos();
    res.json(atropelamentos);
});

export default router;