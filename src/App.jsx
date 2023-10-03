import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { TaskContext } from "./TaskContext";
import Home from "./components/TaskManager/Home/Home";
import Statistics from "./components/Statistics/Statistics/Statistics";

const App = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    getRecordsHandler();
  }, []);

  const getRecordsHandler = async () => {
    const response = await fetch(`http://127.0.0.1:5050/tasks`);

    if (!response.ok) {
      const message = `An error occurred while fetching tasks data: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const records = await response.json();

    setTasks(records);
  };

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <Routes>
          <Route path="/" element={<Home onReload={getRecordsHandler} />} />
          <Route path="/Statistics" element={<Statistics />} />
        </Routes>
      </TaskContext.Provider>
    </>
  );
};

export default App;
