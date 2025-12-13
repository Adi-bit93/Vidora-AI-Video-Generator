import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            minlength: 2
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
            select: false,
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);
export default User;