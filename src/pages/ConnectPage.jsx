import React from 'react'

import { Box, Typography } from '@mui/material'

import BaseLayout from '../layouts/BaseLayout'

import ProjectCard from '../components/ProjectCard'

import PitchCard from './../components/PitchCard'

import AlphaPassCard from '../components/AlphaPassCard'

const ConnectPage = () => {
  return (
    <BaseLayout showMenu={false}>
      <ProjectCard />

      <PitchCard title='Discover the LUDO Game Pitch!' width="100%" height={(window.innerHeight/1.3)} />

      <AlphaPassCard />

      <Box sx={{ width: '100%', textAlign: 'center', m: 1 }}>
        <Typography color="text.secondary" variant="subtitle2">© LUDOGame website - <small>version <code>1.0.0</code></small></Typography>
        <Typography color="text.secondary" variant="subtitle2"><small>The first web3 LUDO P2E Game on Solana blockchain since 2024</small></Typography>
      </Box>
    </BaseLayout>
  )

}

export default ConnectPage
