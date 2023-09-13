import React from 'react'
import Home from './components/TaskManager/Home'
import Statistics from './components/Statistics/Statistics'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" Component={Home} />
      <Route path="/Statistics" element={<Statistics />} />
    </Routes>
  )
}

export default App