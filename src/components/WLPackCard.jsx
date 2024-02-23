import { useTheme } from '@mui/material/styles'
import { Box, Button, Card, CardActions, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material'

export const data = [
  {
    pack: 'racer',
    image: 'img/wl-packs/pack-racer.png',
    description: `
      The first entry pack for the LUDO Game adventure.\n
      It includes 4 NFTs + Bonus, a good low-cost way to explore the potential of the LUDO Game project.
    `,
    link: 'https://app.hel.io/pay/65e866275002f964cfe8e87d',
    phases: [
      {}, // no phase 0
      {
        price: 100,
        stock: {
          sold: 1,
          total: 25
        }
      }
    ]
  },
  {
    pack: 'elite',
    image: 'img/wl-packs/pack-elite.png',
    description: 'It\'s a double RACER pack with top-quality bonuses ! For a total of 10 NFTs, it\'s a great way to maximise your investment.',
    link: 'https://app.hel.io/pay/65e8695b541565af831cc2fd',
    phases: [
      {}, // no phase 0
      {
        price: 175,
        stock: {
          sold: 1,
          total: 25
        }
      }
    ]
  },
  {
    pack: 'prestige',
    image: 'img/wl-packs/pack-prestige.png',
    description: 'Our best offer for collectors! 12 NFTs + 4 offered in Legendary quality! Secure your reign now!',
    link: 'https://app.hel.io/pay/65e86b03fd509bc4dbbfd180',
    phases: [
      {}, // no phase 0 ;)
      // phase 1
      {
        price: 225,
        stock: {
          sold: 1,
          total: 25
        }
      }
    ]
  }
]

const WLPackCard = ({ pack, phase }) => {
  const theme = useTheme()
  const prcAvailable = 100 - data.filter(p => p.pack === pack)[0].phases[1].stock.sold * 100 / data.filter(p => p.pack === pack)[0].phases[1].stock.total

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardMedia
        sx={{ width: 345, height: 140 }}
        image={data.filter(p => p.pack === pack)[0].image}
      />
      <CardContent sx={{ minHeight: 170 }}>
        <Typography variant="h5" component="div" color={theme.palette.secondary.light} sx={{ textTransform: 'uppercase' }}>Pack {pack}</Typography>
        <Typography variant="body2" color="text.secondary">
          {data.filter(p => p.pack === pack)[0].description}
        </Typography>
      </CardContent>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant="body2" component="div" sx={{ paddingLeft: 2 }}>Availability</Typography>
        <Typography variant="body2" component="div" sx={{ paddingLeft: 2 }}>
          {data.filter(p => p.pack === pack)[0].phases[1].stock.total - data.filter(p => p.pack === pack)[0].phases[1].stock.sold} / {data.filter(p => p.pack === pack)[0].phases[1].stock.total}
        </Typography>
      </Box>



      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <LinearProgress sx={{ width: '90%' }} variant="determinate" value={prcAvailable} />
      </Box>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Typography
          variant="h5"
          component="div"
          color={theme.palette.primary.light}
          sx={{ textTransform: 'uppercase' }}
          >$ {data.filter(p => p.pack === pack)[0].phases[1].price}</Typography>
        <Button
          onClick={() => window.open(data.filter(p => p.pack === pack)[0].link, '_blank')}
          color="primary"
          sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}
          size="small" variant='contained'>Purchase</Button>
      </CardActions>
    </Card>
  )
}

export default WLPackCard
