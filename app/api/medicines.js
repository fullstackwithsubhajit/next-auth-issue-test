import Medicine from "@/models/medicine";
import { connectDB } from "@/db";

export default async function handler(req,res){
    await connectDB()

    if(req.method=== "GET"){

        const medicines = await Medicine.find()
        return res.status(200).json(medicines)
    }
    
    if(req.method === "POST"){

        const {name, price, quantity,rack} =req.body;
        const med = await Medicine.create({name, price,quantity ,rack})
        return res.status(201).json(med)
    }

   res.status(405).json({message:"Method not allowed"})




} 