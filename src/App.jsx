import React, { useEffect, useState } from "react";
import Home from "./components/TaskManager/Home/Home";
import Statistics from "./components/Statistics/Statistics/Statistics";
import { Route, Routes } from "react-router-dom";
import { TaskContext } from "./TaskContext";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    mockApiCall();
  }, []);

  const mockApiCall = () => {
    fetch("http://localhost:3031/tasks")
      .then((data) => {
        return data.json();
      })
      .then((task) => {
        setTasks(task);
      });
  }

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Statistics" element={<Statistics tasks={tasks} />} />
        </Routes>
      </TaskContext.Provider>
    </>
  );
};

export default App;
