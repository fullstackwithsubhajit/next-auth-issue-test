import medicine from "@/models/medicine";
import { connectDB } from "@/db";

export default async function handler(req, res){

    await connectDB();
    const {id} =  req.query

    // PUT request
    if(req.method === "PUT"){
        try {
            const updatedMedicine = await medicine.findOneAndUpdate({_id: id} , req.body,{
                new:true
            })

            if(!updatedMedicine){
                return res.status(404).json({message: "Medicine not found"});

            }

            return res.status(200).json(updatedMedicine)


        }
        
        catch(error){
         return res.status(500).json({ message: "Error updating medicine", error });
        }
    
    }

    //DELETE method

    if(req.method==="DELETE"){
        try {
            const deletedMedicine = await medicine.findOneAndDelete(id)
            if(!deletedMedicine){
                return res.status(404).json({messsage:"cant delete the medicine"})

            }
            
                return res.status(200).json(deletedMedicine)

            
        } catch (error) {
            return res.status(500).json({message:"Error on deleting"})
        }
    }



}