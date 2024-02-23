import React, { createContext, useContext, useEffect, useState } from 'react'
import { Connection, clusterApiUrl } from '@solana/web3.js'


const RPC_URI = 'http://127.0.0.1:8899'
const WS_URI = 'ws://127.0.0.1:8900'

const SolanaContext = createContext()

export const useSolana = () => {
  return useContext(SolanaContext)
}

const SolanaProvider = ({ children }) => {
  const [connection, setConnection] = useState(null)

  useEffect(() => {
    const newConnection = new Connection(RPC_URI, {wsEndpoint: WS_URI})
    setConnection(newConnection)
  }, [])

  return (
    <SolanaContext.Provider value={connection}>
      {children}
    </SolanaContext.Provider>
  )
}

export default SolanaProvider
