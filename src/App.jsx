import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { TaskContext } from "./TaskContext";
import Home from "./components/TaskManager/Home/Home";
import Statistics from "./components/Statistics/Statistics/Statistics";

const App = () => {
  const data = JSON.parse(localStorage.getItem("task"));
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <Routes>
          <Route path="/" element={<Home setTasks={setTasks} />} />
          <Route path="/Statistics" element={<Statistics tasks={tasks} />} />
        </Routes>
      </TaskContext.Provider>
    </>
  );
};

export default App;
