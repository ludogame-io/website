import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import Theme from './../theme'

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={Theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
