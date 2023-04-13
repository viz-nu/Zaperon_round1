import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState(null);
  const getDetails = async () => {
    try {
      const { data } = await axios.get("/validate", { headers: { 'auth-token': localStorage.getItem("token") } });
      setUserDetails(data);

    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
      navigate("/");
    }
  }
  useEffect(() => {
    getDetails()
  }, [])
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      {userDetails === null ? <></> : <body>
        <div className='signin'>
          <Avatar
            alt="Remy Sharp"
            src=""
            sx={{ width: 96, height: 96 }} /><br></br>
          <h1>Welcome {userDetails.fname}!</h1>
          <p>Let's connect to your workspace.</p>
        </div>
      </body>}
      
      <Footer />
      <h4 onClick={Logout} color="inherit">
        logout
      </h4>
    </>
  )
}

export default Home
