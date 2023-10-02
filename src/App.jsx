import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { TaskContext } from "./TaskContext";
import Home from "./components/TaskManager/Home/Home";
import Statistics from "./components/Statistics/Statistics/Statistics";

const App = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    getRecords();
  },[])

  const getRecords = async() => {
    const response = await fetch(`http://127.0.0.1:5050/tasks`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const records = await response.json();
    console.log("response is :", records);

    setTasks(records);
  }



  return (
    <>
      <TaskContext.Provider value={tasks}>
        <Routes>
          <Route path="/" element={<Home setTasks={setTasks} refetchTaskList={getRecords}/>} />
          <Route path="/Statistics" element={<Statistics tasks={tasks} />} />
        </Routes>
      </TaskContext.Provider>
    </>
  );
};

export default App;
