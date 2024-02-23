import React from 'react'
import { useNavigate } from 'react-router-dom'

const GameImgPath = 'img/logo.png'

const GameAvatar = () => {
  const redirect = useNavigate()
  return (<React.Fragment>
    <img onClick={() => redirect('/')} alt="game-avatar" style={{ cursor: 'pointer', width: '3rem', height: '3rem', borderRadius: '50%', border: '0.1rem solid darkgrey' }} src={GameImgPath} />
  </React.Fragment>)
}

export default GameAvatar
