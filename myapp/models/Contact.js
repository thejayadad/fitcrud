import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    category: String,
})


export default mongoose?.models?.Contact || mongoose.model("Contact", ContactSchema)