

export const generateVideoFromPrompt = async (prompt) => {
    return new promise((resolve) => {
        setTimeout(() => {
            resolve({
                videoUrl: "https://res.cloudinary.com/demo/video/upload/sample.mp4",
                publicId: "demo/sample",
                duration: 8
            });
        }, 6000)
    })
}