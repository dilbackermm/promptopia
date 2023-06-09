import mongoose from "mongoose";

let isConnectd = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    console.log('MongoDB is already connectd');
    return;
}

try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    isConnectd = true;
    console.log('MongoDB connectd')
} catch (error) {
    console.log(error);
}