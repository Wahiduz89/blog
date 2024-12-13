import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://greatstack:greatstack123@cluster0.xbz21.mongodb.net/blog-app');
    console.log("DB Connected");
}