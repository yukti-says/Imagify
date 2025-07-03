dotenv.config();

// connect with mongodb
import mongoose from "mongoose";

// const connectDB = async () => {
//     await mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// }

async function connectDB() {
    try {
        // an event for when the connection is established
        mongoose.connection.on('connected', () => {
            console.log('database connected');
            
        })
        await mongoose.connect(`${process.env.MONGODB_URL}/imagify`);
        // console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
    
}export default connectDB;