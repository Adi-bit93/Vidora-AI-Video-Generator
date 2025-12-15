import cloudinary from "../config/cloudinary.js";

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