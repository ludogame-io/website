import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'

import DiscordIcon from './DiscordIcon'
import GithubIcon from './GithubIcon'
import XTwitterIcon from './XTwitterIcon'

import ZealyIcon from './ZealyIcon'
import SubberIcon from './SubberIcon'
import Atlas3Icon from './Atlas3Icon'

const ProjectCard = () => {
  const theme = useTheme()
  return (
    <Card sx={{ display: 'flex', flexDirection: window.innerWidth < 1200 ? 'column':'row' }}>
      <CardMedia
        component="img"
        sx={{ width: '20%', margin: '1rem', border: '1px solid', borderRadius: '20%' }}
        image="img/pfp.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5" color="primary">
            The Classic Reimagined on Solana's Blockchain
          </Typography>
          <Typography variant="subtitle2" color="secondary">
            Welcome to the future of board gaming with "LUDO Game: Roll, Race, Reign!"
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Through the power of Solana's lightning-fast blockchain, we are revolutionizing the way you play, interact, and transact within your favorite board games.<br />
          <strong>Our mission is clear</strong>: To seamlessly blend the nostalgic joy of LUDO with cutting-edge technology, providing a web and mobile platform where strategy, competition, and blockchain utility merge into a singular, exhilarating experience.<br />
          With our exclusive collection of NFTs representing each piece on the board, players can own a piece of the game, literally.<br />
          LUDO Game is more than a game; it's an :tickets: entry into the boundless possibilities of Solana's Web3 universe.<br />
          Get ready to experience your childhood favorite in a way you've never imagined.
          </Typography>
          <Typography sx={{ textAlign: 'end' }} variant="body1">Roll the dice, race to victory, and reign supreme with LUDO Game on Solana.</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography variant="subtitle1" sx={{ ml: 1, mr: 1 }} color="secondary">Follow us</Typography>
            <IconButton aria-label="next">
              <XTwitterIcon
                onClick={() => window.open('https://x.com/ludogame_io', '_blank')}
                sx={{ width: '1rem', height: '1rem', color: theme.palette.secondary.main }} />
            </IconButton>
            <IconButton aria-label="play/pause">
              <GithubIcon
                onClick={() => window.open('https://github.com/ludogame-io', '_blank') }
                sx={{ width: '1rem', height: '1rem', color: theme.palette.secondary.main }}
                />
            </IconButton>
            <IconButton aria-label="previous">
              <DiscordIcon
                onClick={() => window.open('https://discord.gg/qUKTDgS8NZ', '_blank')}
                sx={{ width: '1rem', height: '1rem', color: theme.palette.secondary.main }} />
            </IconButton>
        </Box>

        </CardContent>

      </Box>

    </Card>
  )
}

export default ProjectCard
