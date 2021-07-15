import { Router } from 'express';
import userController from '../controllers/UserC';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// mustn't exist
// router.get('/', loginRequired, userController.index); // List all users
// router.get('/:id', loginRequired, userController.show); // List a user

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> List the whole users -> GET
store/create -> create a new user -> POST
delete -> delete a user -> DELETE
show -> shows a user -> GET
update -> update a user -> PATCH or PUT
*/
