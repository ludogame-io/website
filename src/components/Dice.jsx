import React, { useState } from 'react'

import { Button } from '@mui/material'

const Dice = () => {
  const sides = 6
  const [dice, setDice] = useState(null)
  
  const roll = () =>  Math.floor(Math.random() * sides) + 1

  return (
    <Button
      onClick={() => {
        const newValue = roll()
        console.log('roll dice...', dice, newValue)
        setDice(newValue)
      }}
      >Roll</Button>
  )
}

export default Dice
