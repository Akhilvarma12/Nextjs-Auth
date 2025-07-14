import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDb connected")
        })

        connection.on('error',(err)=>{
             console.log('MongoDB connection error, make sure db is up and running'+err)
             process.exit() 
        })

    } catch (error) {
        console.log('MongoDB connection error');
        console.log(error);
    }
}