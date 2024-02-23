import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';

import { useSolana } from './SolanaProvider'

import SolanaIcon from './SolanaIcon'

const WalletBalance = () => {
  const [balance, setBalance] = useState(null) // in lamports
  const connection = useSolana()
  const isConnected = useSelector(({ user }) => user.isConnected)
  const SOL = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'SOL',
  })

  useEffect(() => {
    const getInitialBalance = async () => {
      const wallet = await window.solana.connect()
      setBalance(await connection.getBalance(wallet.publicKey))
    }

    const suscribeAccountChange = async () => {
      const wallet = await window.solana.connect()
      connection.onAccountChange(
        wallet.publicKey,
        (account_infos) => setBalance(account_infos.lamports),
        "finalized"
      )
    }

    if ( connection && isConnected ) {
      getInitialBalance()
      suscribeAccountChange()
    }
  }, [connection, isConnected])

  return (<Typography style={{ display: 'flex', justifyContent: 'center' }} variant="subtitle1" noWrap component="div">{SOL.format(balance / 1e9).replace('SOL', '')} <SolanaIcon /></Typography>)
}

export default WalletBalance
