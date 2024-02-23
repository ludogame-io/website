import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

import { useWebSocket } from './WebSocketProvider'

const ChatBox = () => {
  const [messages, setMessages] = useState([])
  const [usernameInput, setUsernameInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const socket = useWebSocket()

  useEffect(() => {
    if (!socket) return

    socket.onmessage = (event) => {
      setMessages(prevMessages => [...prevMessages, event.data])
    }

    return () => {
      socket.onmessage = null
    }
  }, [socket])

  const sendMessage = () => {
    if (!socket || !messageInput.trim()) return

    const formattedMessage = `[${new Date().toLocaleTimeString()}] (${usernameInput}): ${messageInput}`

    socket.send(JSON.stringify({ event: "message", data: { message: formattedMessage }}))
    setMessageInput('')
    setMessages(prevMessages => [...prevMessages, formattedMessage])
  }

  return (
    <div>
      <Typography variante="body" component="div">Chat with us :)</Typography>
      <ul style={{ listStyleType: "none", textAlign: "left" }}>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder='username'
        required
      />
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder='message...'
        required
      />
      <button onClick={sendMessage}>Envoyer</button>
      <Typography variante="body" component="div">Connect your wallet to enable the chat</Typography>
    </div>
  )
}

export default ChatBox
