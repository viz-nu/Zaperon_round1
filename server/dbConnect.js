import mongoose from "mongoose";
import config from 'config';
dbConnect();
async function dbConnect() {
    try {
        await mongoose.connect(config.get("MongoDB_URL"), { useNewUrlParser: true, useUnifiedTopology: true, })
        console.log(`MongoDB Connected`);

    } catch (error) {
        console.log(error);
        process.exit();
    }
};