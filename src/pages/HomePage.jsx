import React from 'react'

import Typography from '@mui/material/Typography';

import BaseLayout from '../layouts/BaseLayout'

const HomePage = () => {
  return (
    <BaseLayout showMenu={true}>
      { /* TODO: create 404 template */ }
      <Typography variante="body" component="div">Homepage...</Typography>
    </BaseLayout>
  )
}

export default HomePage
