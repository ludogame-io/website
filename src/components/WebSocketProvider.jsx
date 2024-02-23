import React, { createContext, useContext, useEffect, useState } from 'react'

const WebSocketContext = createContext()

export const useWebSocket = () => {
  return useContext(WebSocketContext)
}

const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {

    // @fixme !
    /*
    if (!process.env.WSS_URI || !process.env.WSS_PORT) {
      throw new Error('WSS_URI and WSS_PORT must be set')
    }
    */
    const newSocket = new WebSocket('ws://localhost:8080')//`${process.env.WSS_URI}:${process.env.WSS_PORT}`)

    // newSocket.onopen = () => console.log('WebSocket connected')

    setSocket(newSocket)

    return () => newSocket.close()
  }, [])

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  )
}

export default WebSocketProvider
