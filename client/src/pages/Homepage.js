import { Grid, Typography } from '@mui/material'
import React from 'react'
import Map from '../components/GoogleMap/Map'

const Homepage = () => {
  return (
    <Grid container maxWidth={'xl'} justifyContent={'center'}>
      <Grid item md={8} xs={12}>
        <div style={{ minHeight: "100vh" }}>
          <Map />
        </div>
      </Grid>
      <Grid item md={4} xs={12} >
        <Typography variant="h3" marginTop={3} textAlign={'center'}>Aitihasik</Typography>
      </Grid>
    </Grid>
  )
}

export default Homepage