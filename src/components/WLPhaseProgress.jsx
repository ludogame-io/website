import { Box, Button, Card, CardActions, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material'

const WLPhaseProgress = () => {
  const total_pack = 25 * 3
  const total_sold = 3
  const value = 100 - (total_sold * 100 / total_pack)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography color="primary" variant='h6'>WL Phase 1 countdown</Typography>
      <LinearProgress color="primary" sx={{ width: '100%' }} variant="determinate" value={value} />
      <Typography noWrap sx={{ display: 'flex', justifyContent: 'end', marginBottom: 2 }} color="primary" variant="body2">{total_pack - total_sold} Packs remaining...</Typography>
    </Box>
  )
}

export default WLPhaseProgress
