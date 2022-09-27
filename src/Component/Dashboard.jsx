import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'

function Dashboard() {
   const param =useParams()
 
  return (
<>

<Typography variant='h6' sx={{marginTop:'100px', marginLeft:'700px'}}>
     This is dashboard
</Typography>
</>     

  )
}

export default Dashboard