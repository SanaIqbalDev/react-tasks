import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);
  const [taskInfo, setTaskInfo] = useState()


  const ShowItem = (name, detail, duedate) => {


    const updatedTaskInfo = {name:name, detail:detail, duedate:duedate};

    setTaskInfo(updatedTaskInfo.name);

  }
  useEffect(() => {
    console.log(taskInfo); 
    if (taskInfo) { setShowAddedTask(true) }

  }, [taskInfo]);
  return (
    <div className="container">
      <TaskForm onSubmit={ShowItem} />
      {showAddedTask && <TaskItem Task={taskInfo} />}
    </div>
  );
}

export default App;
