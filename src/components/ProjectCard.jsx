import * as React from 'react'
import { useTheme } from '@mui/material/styles'

import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'

import DiscordIcon from './DiscordIcon'
import GithubIcon from './GithubIcon'
import XTwitterIcon from './XTwitterIcon'

import NFTCarousel from '../components/NFTCarousel'

const ProjectCard = () => {
  const theme = useTheme()
  return (
    <Card sx={{ display: 'flex', flexDirection: window.innerWidth < 1200 ? 'column':'row' }}>
      <CardMedia component={NFTCarousel} />
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
          <strong>🎯 Our mission is clear</strong>: To seamlessly blend the nostalgic joy of LUDO with cutting-edge technology, providing a web and mobile platform where strategy, competition, and blockchain utility merge into a singular, exhilarating experience.<br />
          With our exclusive collection of NFTs representing each piece on the board, players can own a piece of the game, literally.<br />
          <strong>LUDO Game</strong> is more than a game; it's an 🎟️ entry into the boundless possibilities of Solana's Web3 universe.<br />
          Get ready to experience your childhood favorite in a way you've never imagined.
          </Typography>

          <Typography sx={{ textAlign: 'end' }} variant="body1">Roll the dice, race to victory, and reign supreme with LUDO Game on Solana.</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography variant="subtitle1" sx={{ ml: 1, mr: 1 }} color="secondary">Follow us</Typography>
            <IconButton
              onClick={() => window.open('https://x.com/ludogame_io', '_blank')}
              aria-label="(X) Twitter link">
              <XTwitterIcon sx={{ width: '1rem', height: '1rem', color: theme.palette.secondary.main }} />
            </IconButton>
            <IconButton
              onClick={() => window.open('https://github.com/ludogame-io', '_blank') }
              aria-label="Github link">
              <GithubIcon sx={{ width: '1rem', height: '1rem', color: theme.palette.secondary.main }} />
            </IconButton>
            <IconButton
              onClick={() => window.open('https://discord.gg/qUKTDgS8NZ', '_blank')}
              aria-label="Discord link">
              <DiscordIcon sx={{ width: '1rem', height: '1rem', color: theme.palette.secondary.main }} />
            </IconButton>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}

export default ProjectCard
