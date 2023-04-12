import { Avatar } from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <body>
        <div className='signin'>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 96, height: 96 }} /><br></br>
          <h1>Welcome !</h1>
          <p>Let's connect to your workspace.</p>
        </div>
      </body>
      <Footer />
    </>
  )
}

export default Home
