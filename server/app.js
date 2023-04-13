import express from "express"
const app = express()
import config from "config"
import "./dbConnect.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
let { JWT, port } = config.get("SECRET_KEYS")
import userModel from "./models/userModel.js"
app.get("/", (req, res) => { res.send("server Up and Running") })

app.use(express.json())
// {
//     "email": "happy@gmail.com",
//         "password": "happy1"
// }
app.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) return res.status(401).json({ msg: "Invalid email. Please try again" })
        let match = await bcrypt.compare(req.body.password, user.password)
        if (!match) return res.status(401).json({ msg: "invalid credintials. please try again" })
        let payload = {
            user_id: user._id,
            email: user.email,
            fname: user.fname,
        }
        let token = jwt.sign(payload, JWT, { expiresIn: "1h" })
        return res.status(200).json({ token:token,msg:"Login successfull" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal error at server" });
    }
})
app.get("/validate", async (req, res) => {
    try {
        let decoded = jwt.verify(req.headers["auth-token"], JWT);
        const user = await userModel.findOne({ email:decoded.email })
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal error at server" });
    }
})
// {
//     "fname": "Happy",
//         "email": "happy@gmail.com",
//             "password": "happy1"
// }
// app.post("/register", async (req, res) => {
//     try {
//         const formData = new userModel(req.body)
//         const hash = await bcrypt.hash(formData.password, 12)
//         formData.password = hash;
//         await formData.save();
//         const user = await userModel.findOne({email:formData.email})
//         res.status(200).json(user)

//     } catch (error) {
//         console.log(error);
//     }
// })
app.listen(port, () => console.log(`server running on ${port}`))
