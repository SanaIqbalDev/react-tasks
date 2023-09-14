import React, { useEffect, useState } from "react";
import Home from "./components/TaskManager/Home";
import Statistics from "./components/Statistics/Statistics";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // console.log("task is :", taskList);
    setTasks(tasks);
  }, [tasks]);


  return (
    <Routes>
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
    </Routes>
  );
};

export default App;
