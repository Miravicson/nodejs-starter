import { Router } from 'express';

import controller from './controller';

const helloWorldController = controller({});

const router = Router();
router.get('/', helloWorldController.helloWorld);

export default router;
