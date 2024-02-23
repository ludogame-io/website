import React from 'react'

import BaseLayout from '../layouts/BaseLayout'

import Dice from '../components/Dice'
import GameBoard from '../components/GameBoard'
import Deck from '../components/Deck'

const GamePage = () => {
  return (
    <BaseLayout showMenu={true}>
      Game page<br />
      <Dice />
      <GameBoard />
      <Deck />
    </BaseLayout>
  )
}

export default GamePage
