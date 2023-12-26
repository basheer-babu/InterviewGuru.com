import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../layouts/Sidebar'
import QuestionDisplay from '../components/QuestionDisplay'

const Homepage = () => {
  return (
    <div>
      <Grid container spacing={2} >
        <Grid item xs={2} lg={3}>
            <Sidebar/>
        </Grid>
        <Grid item xs={10} lg={9}>
          <QuestionDisplay/>
          </Grid>
      </Grid>
    </div>
  )
}

export default Homepage
