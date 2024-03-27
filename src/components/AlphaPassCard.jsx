import { useTheme } from '@mui/material/styles'
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'

import TurnRightIcon from '@mui/icons-material/TurnRight'
import TurnLeftIcon from '@mui/icons-material/TurnLeft'

import WLPackCard from './WLPackCard'
import WLPhaseProgress from './WLPhaseProgress'
import AlphaPhaseButton from './AlphaPhaseButton'

const AlphaPassCard = () => {
  const theme = useTheme()
  return (
    <Card sx={{ display: 'flex', flexDirection: window.innerWidth < 1200 ? 'column':'row' }}>
      <CardMedia
        component="img"
        sx={{ width: '20%', margin: '1rem', border: '1px solid', borderRadius: '20%' }}
        image="img/wl-pass.png"
        alt="WL Pass cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5" color="primary">
            The ALPHA Phase
          </Typography>
          <Typography variant="subtitle2" color="secondary">
            First come, first served! Be among the first to support the project and believe in it!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            To enter the ALPHA Phase, you need to obtain the <strong style={{ color: theme.palette.primary.main }}>discord <span style={{ color: theme.palette.secondary.main }}>WL</span> role</strong>.
            All you need to do is purchase one or more of our following NFTs packs.<br />
            Don't forget, as mentioned in our presentation pitch above, our best prices, rewards and bonuses are available to early adopters.<br />
            This first launch phase only includes 75 packs! 
          </Typography>
          <Typography sx={{ textAlign: 'end' }} variant="body1">Join us and take advantage of the best bonuses right now!</Typography>




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

        <Typography sx={{ textAlign: 'center' }} variant="body1" color="primary">
          Already have your <strong style={{ color: theme.palette.secondary.main }}>LUDOGame</strong> pack?<br />
          <TurnLeftIcon style={{ verticalAlign: 'middle', transform: 'rotate(-90deg)' }} />
          Join the ALPHA now!
          <TurnRightIcon style={{ verticalAlign: 'middle', transform: 'rotate(90deg)' }} />
        </Typography>

        </CardContent>

        <CardActions>
          <AlphaPhaseButton/>
        </CardActions>
      </Box>

    </Card>
  )
}

export default AlphaPassCard
