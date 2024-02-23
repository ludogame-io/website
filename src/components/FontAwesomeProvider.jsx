import React, { useEffect } from 'react'
import { loadCSS } from 'fg-loadcss'

const FontAwesomeProvider = ({ children }) => {
  useEffect(() => {
    const node = loadCSS(`https://use.fontawesome.com/releases/v${process.env.REACT_APP_FONTAWESOME_VERSION}/css/all.css`, document.head.firstChild)
    return () => node.parentNode.removeChild(node)
  },[])

  return (<>{children}</>)
}

export default FontAwesomeProvider
