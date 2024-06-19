import express from 'express';
import volunteerController from '../controllers/VolunteersController.js';

const router = express.Router();
router.get('/', volunteerController.getAll);
router.get('/:id', volunteerController.getById);
router.post('/:id', volunteerController.add);

export default router;