import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import { getMyVideos, getVideoById, saveVideo, uploadVideo } from '../controllers/video.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post(
    "/upload",
    requireAuth,
    upload.single("video"),
    uploadVideo
)

// save video to metadata
router.post("/save", requireAuth, saveVideo)

// get all the videos of user 
router.get("/me", requireAuth, getMyVideos)

// get video by Id
router.get("/:id", requireAuth, getVideoById)

export default router;