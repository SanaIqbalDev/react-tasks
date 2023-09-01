import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [taskInfo, setTaskInfo] = useState('')


  const ShowItem = (name, detail, duedate) => {

    const updatedTaskInfo = {name, detail, duedate};

    setTaskInfo(updatedTaskInfo);

  }

  return (

    <div className="container">

      <TaskForm onSubmit={ShowItem} />

      {taskInfo && <TaskItem task={taskInfo} />}

    </div>

  );
}

export default App;
