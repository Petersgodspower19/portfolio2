import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AppLayout />} >
    <Route index element={<Home />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
