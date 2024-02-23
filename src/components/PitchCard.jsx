import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Typography from '@mui/material/Typography'

const PitchCard = ({ title, ...others }) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ textAlign: 'center' }}>{title}</Typography>
        <iframe src="https://pitch.com/embed-link/33ce8n" allow="fullscreen" {...others} ></iframe>
      </CardContent>
    </Card>
  )
}

export default PitchCard
