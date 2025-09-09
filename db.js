import mongoose from "mongoose";

const DATABASE_URI= "mongodb+srv://devwithsubhajit_db_user:U7T2tGXJbyuV2AEs@billingsoftwarenew.mwp8bpe.mongodb.net/billing"
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
