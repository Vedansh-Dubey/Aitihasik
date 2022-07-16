import { Grid, Typography } from '@mui/material'
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
      <Grid item  xs={12} >
        <div style={{padding:"2rem"}}>
        <Typography variant="h3" marginTop={3} textAlign={'center'}>Aitihasik</Typography>
        <Typography variant="h5" marginTop={3} textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem tempore dolorum assumenda autem laudantium quos porro quis? Aliquid sed blanditiis repellendus.</Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default Homepage