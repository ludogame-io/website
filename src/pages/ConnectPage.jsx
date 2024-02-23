import React from 'react'

import { Box, Grid } from '@mui/material'

import BaseLayout from '../layouts/BaseLayout'

import ProjectCard from '../components/ProjectCard'

import PitchCard from './../components/PitchCard'
import WLPackCard from '../components/WLPackCard'

import WLPhaseProgress from './../components/WLPhaseProgress'

const ConnectPage = () => {
  return (
    <BaseLayout showMenu={false}>
      <Box sx={{ width: '100%' }}>
        <ProjectCard />
      </Box>

      <Box sx={{ width: '100%' }}>
        <PitchCard title='Discover the LUDO Game Pitch!' width="100%" height={(window.innerHeight/1.3)} />
      </Box>

      <Box sx={{ width: '100%' }}>
        <WLPhaseProgress value={22} />
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <WLPackCard pack="racer" phase="1" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <WLPackCard pack="elite" phase="1" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <WLPackCard pack="prestige" phase="1" />
        </Grid>
      </Grid>

    </BaseLayout>
  )

}

export default ConnectPage
