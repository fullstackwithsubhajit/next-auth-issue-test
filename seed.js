import { connectDB } from "./db.js";
import Medicine from "./models/medicine.js";

const seedMedicines = async () => {
  await connectDB();

  const medicines = [
    { name: "Paracetamol", price: 10, quantity: 100, rack: "A1" },
    { name: "Amoxicillin", price: 20, quantity: 50, rack: "B2" },
    { name: "Ibuprofen", price: 15, quantity: 80, rack: "A2" },
  ];

  for (const med of medicines) {
    await Medicine.create(med);
  }

  const allMedicines = await Medicine.find();
  console.log(allMedicines);
  process.exit(0);
};

seedMedicines();
