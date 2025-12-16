
import connectDB from "./config/db.js";
import app from "./app.js";
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";

connectDB();

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});
