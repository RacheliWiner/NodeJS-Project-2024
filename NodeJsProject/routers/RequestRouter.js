import express from 'express';
import requestController from '../controllers/HelpRequestController.js';

const router = express.Router();

router.get('/', requestController.getAll);

router.get('/:id', requestController.getById);

router.put('/:id', requestController.update);

export default router;