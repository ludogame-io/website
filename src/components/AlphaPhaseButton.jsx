import { Button } from '@mui/material'

const AlphaPhaseButton = () => {
  return (
    <Button
      onClick={() => window.location.href = 'https://alpha.ludogame.io' }
      fullWidth
      color="secondary"
      variant="contained"
    >Enter to the ALPHA Phase</Button>
  )
}

export default AlphaPhaseButton
