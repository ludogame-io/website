import Typography from '@mui/material/Typography'

import BaseLayout from '../layouts/BaseLayout'


import PitchCard from './../components/PitchCard'

const DocsPage = () => {
  return (
    <BaseLayout showMenu={true}>
      <PitchCard title='Discover the LUDO Game Pitch!' width="100%" height={(window.innerHeight/1.3)} />
    </BaseLayout>
  )
}

export default DocsPage
