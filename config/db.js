import mongoose from "mongoose"

let isConnected = false;

const dbConnect = async () => {
    if (isConnected) return;
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
}

export default dbConnect