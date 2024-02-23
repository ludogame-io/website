import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ConnectPage from './pages/ConnectPage'
import HomePage from './pages/HomePage'
import DocsPage from './pages/DocsPage'
import ProtectedRoute from './layouts/ProtectedRoute'
import NotFoundPage from './pages/NotFoundPage'
import RoomsPage from './pages/RoomsPage'
import GamePage from './pages/GamePage'
import SettingsPage from './pages/SettingsPage'


// import App.css

const App = () => (
  <Router>
    <main className='container content'>
      <Routes>
        <Route path='/connect' element={<ConnectPage />} />
        <Route path='/docs' element={<DocsPage />} />
        <Route path='/' element={<ConnectPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/rooms' element={<RoomsPage />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Route>

        {/* match others routes */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </Router>
)

export default App
