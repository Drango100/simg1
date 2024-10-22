import { Router } from 'express';
import { register } from '../../controllers/register.js';

const router = Router();

router.post('/registro', register);

export default router;