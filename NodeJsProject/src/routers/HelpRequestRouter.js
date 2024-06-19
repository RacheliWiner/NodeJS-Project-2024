import express from 'express';
import helpRequestController from '../controllers/HelpRequestsController.js';
const router = express.Router();
router.get('/', (req, res, next) => helpRequestController.getAll(req, res, next));
router.get('/:id', helpRequestController.getById);
// router.get('/', helpController.getAll);
router.put('/:id', helpRequestController.update);


export default router;
