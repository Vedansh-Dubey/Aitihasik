import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Map from '../components/GoogleMap/Map'

const Homepage = () => {
  return (
    <Grid container maxWidth={'xl'} justifyContent={'center'}>
      <Grid item md={12} xs={12}>
        <div style={{ minHeight: "100vh" }}>
          <Map />
        </div>
      </Grid>
      <Grid item xs={12} >
        <div style={{ padding: "2rem" }}>
          <Typography variant="h3" marginTop={3} textAlign={'center'}>Aitihasik</Typography>
          <Typography variant="h5" marginTop={3} textAlign={'center'}>Click on any of the buttons given below</Typography>

        </div>
      </Grid>
      <Grid item>
        <Button variant='contained' style={{marginRight:"1rem",marginBottom:"1rem", fontSize:"1.22rem"}}>Rulers</Button>
        <Button variant='contained' style={{marginRight:"1rem",marginBottom:"1rem", fontSize:"1.22rem"}}>Forts</Button>
        <Button variant='contained' style={{marginRight:"1rem",marginBottom:"1rem", fontSize:"1.22rem"}}>Quiz</Button>
      </Grid>
    </Grid>
  )
}

export default Homepage