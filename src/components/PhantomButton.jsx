import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

import { connect } from './../features/user/userSlice'

import useWallet, { isPhantomWallet } from './../hooks/useWallet'

const PhantomButton = ({ onClick }) => {
  const [isHidden, setHidden] = useState(false)
  const dispatch = useDispatch()
  const isConnected = useSelector(({ user: { isConnected } }) => isConnected)
  // const redirect = useNavigate()
  const wallet = useWallet()

  useEffect(() => {
    isConnected ? setHidden(true) : setHidden(false)
  }, [isConnected])

  const connectToPhantom = async () => {
    try {
      const conn = await wallet.connect()
      dispatch(connect({ publicKey: conn.publicKey.toBase58(), type: isPhantomWallet() ? 'phantom' : 'unknow' }))
      
      onClick && onClick() // pass event to parent
      // redirect('/')
    } catch (error) {
      console.error('Failed to connect to Phantom:', error)
    }
  }

  return !isHidden && (
    <Button variant="contained" onClick={connectToPhantom}>Connect</Button >
  )
}

export default PhantomButton
