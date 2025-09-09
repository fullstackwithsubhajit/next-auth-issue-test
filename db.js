import mongoose from "mongoose";

const DATABASE_URI= process.env.DATABASE_URI
export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
};
