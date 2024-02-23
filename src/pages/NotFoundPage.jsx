import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import BaseLayout from '../layouts/BaseLayout'

const NotFoundPage = () => {
  const redirect = useNavigate()

  return (
    <BaseLayout showMenu={false}>
      { /* TODO: create 404 template */ }
      <Typography variante="body" component="div">404 - Page not found</Typography>
      <Button variant="contained" onClick={() => redirect('/')}>Back to home</Button>
    </BaseLayout>
  )
}

export default NotFoundPage
