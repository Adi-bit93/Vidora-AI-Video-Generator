import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express()

app.use(express.json({ limit: "10mb"}));
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(morgan("dev"))

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

app.get("/", (req, res) => {
    res.json({ success: true, message:"Backend is running 🚀"})
})

export default app;