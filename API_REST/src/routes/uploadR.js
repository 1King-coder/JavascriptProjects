import { Router } from 'express';

import uploadController from '../controllers/UploadC';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, uploadController.store);

export default router;
