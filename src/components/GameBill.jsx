import React from 'react'


/*
  Event   | FeePayer  | Cost    
  Create  | Player1   | -0.0003 # Initialize a new game (create PDA instance)
  Join    | Player1   | -0.0001
  Deposit | Player1   | +0.05
  Roll    | Player1   | -0.0001
  Move    | Player1   | -0.0001
  ... same for other(s) player(s)
  ... ending game: PlayerX won
  Total deposit:      | +0.xxx
  Total cost:         | -0.xxx
  Game Fee (i)        | -0.xxx
  Dev Fee (i)         | -0.xxx

  You WON             | +0.xxx


*/
const GameBill = () => {
  return (
    <>
      Game bill comp
    </>
  )
}

export default GameBill
