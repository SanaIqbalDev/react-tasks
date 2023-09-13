import React, { useState } from 'react'
import Home from './components/TaskManager/Home'
import Statistics from './components/Statistics/Statistics'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Routes>
      {/* <Route path="/" Component={Home} /> */}
      <Route path="/" element={<Home setTasks={setTasks} />} />
      <Route path="/Statistics" element={<Statistics Tasks={tasks} />} />
    </Routes>
  )
}

export default App