import { Router } from 'express';
import tokenController from '../controllers/TokenC';

const router = new Router();

router.post('/', tokenController.store);

export default router;
