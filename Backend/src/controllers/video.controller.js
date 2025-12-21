import cloudinary from "../config/cloudinary.js";
import Video from "../models/Video.js";

export const uploadVideo = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No video files found" })
        }

        const uploadResults = await cloudinary.uploader.upload_stream(
            {
                resource_type: "video",
                folder: "ai_videos"
            },
            (error, result) => {
                if (error) return next(error);

                return res.status(201).json({
                    success: true,
                    videoUrl: result.secure_url,
                    publicId: result.public_id,
                    duration: result.duration
                });
            },
        );
        uploadResults.end(req.file.buffer)
    } catch (error) {
        next(error);
    }
}

export const saveVideo = async (req, res, next) => {
    try {
        const { prompt, videoUrl, publicId, duration } = req.body
        if (!prompt || !videoUrl || !publicId) {
            return res.status(400).json({ message: "Missing required fields " });
        }

        const video = await Video.create({
            user: req.user._id,
            prompt,
            videoUrl,
            publicId,
            duration
        });

        return res.status(201).json({
            success: true,
            video,
        });
    } catch (error) {
        next(error)
    }
}

export const getMyVideos = async (req, res, next) => {
    try {
        const videos = await Video.find((
            {
                user: req.user._id
            }
        )).sort({ createdAt: -1 });
        return res.status(201).json({
            success: true,
            videos
        })
    } catch (error) {
        next(error);
    }
}

export const getVideoById = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params._id).populate(
            "user",
            "username email"
        )

        if (!video) {
            return res.status(400).json({ message: "Video not found" })
        }

        return res.status(200).json({
            success: true,
            video
        })

    } catch (error) {
        next(error)
    }
}