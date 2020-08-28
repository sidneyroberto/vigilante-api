import { Router } from 'express';

import EspecieController from '../controllers/EspecieController';

const router = Router();
const especieCtrl = new EspecieController();

router.get('/', async (req, res) => {
    const especies = await especieCtrl.recuperarTodas();
    res.json(especies);
});

export default router;