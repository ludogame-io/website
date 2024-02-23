import React from 'react'
import Typography from '@mui/material/Typography';

import BaseLayout from '../layouts/BaseLayout'

const RoomsPage = () => {
  return (
    <BaseLayout showMenu={true}>
      { /* TODO: create 404 template */ }
      <Typography variante="paragraph">
        Game page. Coming soon, stay tuned! <br />
      </Typography>
    </BaseLayout>
  )

}

export default RoomsPage
