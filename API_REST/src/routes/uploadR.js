import { Router } from 'express';

import uploadController from '../controllers/UploadC';

const router = new Router();

router.post('/', uploadController.store);

export default router;
