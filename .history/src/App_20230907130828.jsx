import React from 'react'
import Home from './components/TaskManager/Home'
import Statistics from './components/Statistics/Statistics'

const App = () => {
  return (
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/" component={<Statistics />} />
    </Routes>
  )
}

export default App