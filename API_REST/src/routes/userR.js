import { Router } from 'express';
import userController from '../controllers/UserC';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);



export default router;

/*
index -> List the whole users -> GET
store/create -> create a new user -> POST
delete -> delete a user -> DELETE
show -> shows a user -> GET
update -> update a user -> PATCH or PUT
*/
