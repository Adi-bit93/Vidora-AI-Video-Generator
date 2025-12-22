import Job from "../models/Job.js"
import Video from "../models/Video.js"
import { generateVideoFromPrompt } from "../utils/fakeAIGenerator.js"

export const createGenerationJob = async (req, res, next) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Prompt is required" });
        }

        const job = await Job.create({
            user: req.user._id,
            prompt
        })

        processJob(job._id);
        return res.status(201).json({
            success: true,
            jobId: job._id
        });
    } catch (error) {
        next(error);
    }
}

export const getJobStatus = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id).populate("videoId");

        if (!job)
            return res.status(404).json({ message: "Job not found" });

        return res.status(200).json({ success: true, job })
    } catch (error) {
        next(error);
    }
};

const processsJob = async (jobId) => {
    try {
        await Job.findByIdAndUpdate(jobId, { status: "processing "});

        const job = await Job.findById(jobId);

        const result = await generateVideoFromPrompt(job.prompt);

        const video = await Video.create({
            user: job.user,
            prompt: job.prompt,
            videoUrl: result.videoUrl,
            publicId: result.publicId,
            duration: result.duration
        });

        await Job.findByIdAndUpdate(jobId, {
            status: "completed",
            videoId: video._id
        });
    } catch (error) {
        await Job.findByIdAndUpdate(jobId, {
            status: "failed",
            error: error.message
        });
    }
}