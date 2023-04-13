import mongoose from "mongoose";
// import { boolean } from "webidl-conversions";
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }

});
const userModel = mongoose.model("Users", userSchema);
export default userModel;
