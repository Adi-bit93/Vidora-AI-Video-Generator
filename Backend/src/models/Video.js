import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required : true,
            index: true
        },
        prompt: {
            type: String,
            rrequired: true,
            trim: true,
            maxlength: 500
        },
        videoUrl: {
            type: String,
            required : true
        },
        publicId: {
            type: String,
            required: true
        },
        duration: {
            type: Number, 
            default: 0
        },
        resolution: {
            type: String,
            default: 256*256
        },
        fps: {
            type: Number,
            default: 20,
        }
    },
    { timestamps: true }
)

const Video = mongoose.model("Video", videoSchema);

export default Video;