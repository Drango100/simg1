import { Router } from 'express';
import { Login } from '../../controllers/controller.login.js';

const router = Router();


router.post('/logins', Login);

export default router;
