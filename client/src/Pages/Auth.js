import { Alert, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Footer from "../Components/Footer";
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect, useState } from 'react';
import axios from "axios"
import {useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setAlert({ type: "error", msg: "Please fill all fields" })
            setTimeout(() => {
                setAlert(false)
                setLoading(false)
            }, 3000);
        }
        try {
            setLoading(true)
            const { data } = await axios.post("/login", { email: email, password: password })
            console.log(data);
            setAlert({ type: "success", msg: data.msg })
            localStorage.setItem("token", data.token);
            navigate("/home", { replace: true })
            setTimeout(() => {
                setAlert(false)
                setLoading(false)
            }, 3000);

        } catch (error) {
            console.log(error);
            setAlert({ type: "error", msg:error.response.data.msg })
            setTimeout(() => {
                setAlert(false)
                setLoading(false)
            }, 3000);
        }
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            console.log("token exists", localStorage.getItem("token"));
            navigate("/home", { replace: true })
        }
    });
    return (
        <>
            <body>
                <div className='signin'>
                    <Avatar alt="Remy Sharp" src="" sx={{ width: 96, height: 96 }} /><br></br>
                    <h1>Welcome!</h1>
                    <p>Let's connect to your workspace.<br></br> Please enter your email to continue.</p>
                    {alert && <Alert severity={alert.type}>{alert.msg}</Alert>}

                    <TextField id="outlined-basic" label="Email Address" variant="outlined" size="small" fullWidth onChange={(e) => { setEmail(e.target.value) }} /><br></br>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" size="small" fullWidth onChange={(e) => { setPassword(e.target.value) }} /><br></br>
                    {loading ? <LoadingButton loading="true" variant="contained">submit </LoadingButton> : <Button onClick={submitHandler} variant="contained" type="submit" disableElevation>SIGN IN</Button>}

                </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Auth
