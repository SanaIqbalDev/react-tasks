import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);
  const [taskInfo, setTaskInfo] = useState([])

  const ShowItem = (isTrue, name, detail, duedate) => {
    

    const updatedTaskInfo = [...taskInfo];

    updatedTaskInfo[0] = name
    updatedTaskInfo[1] = detail
    updatedTaskInfo[2] = duedate

    setTaskInfo(updatedTaskInfo);


    // console.log(updatedTaskInfo);
  }
  useEffect(() => {
    setShowAddedTask(true)

    console.log(taskInfo); // Log the updated taskInfo here
  }, [taskInfo]);
  return (
    <div className="container">
      <TaskForm onSubmit={ShowItem} />
      {showAddedTask && <TaskItem Task={taskInfo} />}
    </div>
  );
}

export default App;
