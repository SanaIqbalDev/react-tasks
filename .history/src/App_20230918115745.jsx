import React, { useEffect, useState } from "react";
import Home from "./components/TaskManager/Home";
import Statistics from "./components/Statistics/Statistics";
import { Route, Routes } from "react-router-dom";
import { TaskContext } from './TaskContext'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <Routes>
      <TaskContext.Provider value={{ tasks }}>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              setTasks={setTasks}
              idNew={tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0}
            />
          }
        />
        <Route path="/Statistics" element={<Statistics tasks={tasks} />} />
      </TaskContext.Provider>
    </Routes>
  );
};

export default App;
