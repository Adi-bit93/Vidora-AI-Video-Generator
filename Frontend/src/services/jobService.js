import { apiRequest } from "../lib/api.js";

export const createJob = (prompt) => {
    return apiRequest("/api/jobs/generate", {
        method: "POST",
        body: JSON.stringify({ prompt})
    });
};

export const getJobStatus = (jobId) => {
    return apiRequest(`/api/jobs/${jobId}`);
};

