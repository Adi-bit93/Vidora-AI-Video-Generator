import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import videoRoutes from './routes/video.routes.js'

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

app.use("/api/auth", authRoutes)
app.use("/api/video", videoRoutes)

app.get("/", (req, res) => {
    res.json({ success: true, message:"Backend is running 🚀"})
    
})

export default app;