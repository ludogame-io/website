import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#14f195',
    },
    secondary: {
      main: '#9945ff',
    },
    background: {
      default: '#373737',
    },
    success: {
      main: '#14f195',
    },
    info: {
      main: '#9945ff',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Anta',
    },
    button: {
      fontFamily: 'Anta',
    },
    h1: {
      fontFamily: 'Anta',
    },
    fontFamily: 'Anta',
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }
    }
  },
})

export default Theme
