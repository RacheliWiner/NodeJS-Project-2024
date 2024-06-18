import express from 'express';
import volunteerController from '../controllers/HelpRequestController.js';

const router = express.Router();

router.get('/', volunteerController.getAll);

router.get('/:id', volunteerController.getById);

router.put('/:id', volunteerController.update);

export default router;