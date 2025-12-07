
export const errorHandler = (err, res, req, next) => {
    console.error("Error:", err.meassage);
    return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again."
    })
}