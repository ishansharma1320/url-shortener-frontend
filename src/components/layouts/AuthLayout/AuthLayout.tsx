import { Box, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    // <Stack direction="row" sx={{width: '100%', minHeight: '100vh'}}>
    //     
    //     <div style={{backgroundColor: 'red', height: '100%'}}></div>
    // </Stack>
    <Grid
    container
  direction="row"
  justifyContent="center"
  alignItems="stretch"
  sx={{ height: '100vh' }}
  >
     <Grid item xs={6}>
     <Box
    sx={{
    //   width: 500,
    height: '100%',
      py: 20,
      px: 10,
      backgroundImage: "url('/assets/images/matrix.jpeg'), linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25))",
    backgroundBlendMode: "overlay",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "2.5%",
    //   maxWidth: '100%',
    //   boxShadow: 12,
      border: "1px solid grey",
    }}
  >
     {/* <Outlet/> */}
     </Box>
     
    </Grid>
    <Grid item xs={6}>
     <Box
    sx={{
    height: '100%',
      py: 20,
      px: 10,
    
      border: "1px solid grey",
    }}
  >
     <Outlet/>
     </Box>
     
    </Grid>
  </Grid>

  )
}
