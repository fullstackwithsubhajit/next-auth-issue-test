import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    name:{type:String, required: true},
    price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  rack: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})
export default mongoose.models.Medicine || mongoose.model("Medicine", medicineSchema);