import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import { uploadVideo } from '../controllers/video.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post(
    "/upload",
    requireAuth,
    upload.single("video"),
    uploadVideo
)

export default router;