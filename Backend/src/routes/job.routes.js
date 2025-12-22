import express from 'express';
import { createGenerationJob, getJobStatus } from '../controllers/job.controller';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/generate", requireAuth, createGenerationJob);
router.get("/:id", requireAuth, getJobStatus);

export default router;