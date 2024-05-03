import mongoose from "mongoose"

 export const ConnectDb = async() => {
    await mongoose.connect('mongodb+srv://todo-next-app:todo123@cluster0.ihdunyf.mongodb.net/todo-app')  ;
    console.log("MongoDB connected") ;
     
}