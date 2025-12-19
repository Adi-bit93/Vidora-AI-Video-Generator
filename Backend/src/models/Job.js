import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        prompt: {
            type: String,
            required: true,
            maxlength: 500
        },

        status: {
            type: String,
            enum: ["queued", "processing", "completed", "failed"],
            default: "queued",
        },

        videoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
            default: null
        },

        error: {
            type: String,
            default: null 
        }
    },
    {timestamps: true}
);

const Job = mongoose.model("Job", jobSchema)

export default Job;