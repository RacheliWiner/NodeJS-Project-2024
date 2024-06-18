import express from 'express';
import helpRequestController from '../controllers/HelpRequestController.js';

const router = express.Router();

router.get('/', helpRequestController.get);
router.get('/:id', helpRequestController.getById);
router.put('/:id', helpRequestController.update);

export default router;