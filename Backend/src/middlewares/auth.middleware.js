import jwt from 'jsonwebtoken';
import User from '../models/User.model.js'

export const requireAuth = async (req, res, next) => {
    try {
        // get token from cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({message: "Unauthorized user - no token"})
        }

        // Verify token
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

        // find the user
        const user = await User.findById(decodeToken.userId).select("-password")

        if (!user) {
            return res.status(401).json({message: "Unauthorized - invalid user"})
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).send("Invalid Token Provided")
    }
}





