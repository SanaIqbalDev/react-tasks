import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);
  const [taskInfo, setTaskInfo] = useState([])


  const ShowItem = (name, detail, duedate) => {


    const updatedTaskInfo = [name, detail, duedate];

    console.log("Length before is ", taskInfo.length)
    setTaskInfo(updatedTaskInfo);
    console.log("Length is", taskInfo.length)

    // setShowAddedTask(isTrue)
  }
  useEffect(() => {
    console.log(taskInfo); // Log the updated taskInfo here
    console.log("Length is", taskInfo.length)
    if (taskInfo.length > 0) { setShowAddedTask(true) }

  }, [taskInfo]);
  return (
    <div className="container">
      <TaskForm onSubmit={ShowItem} />
      {showAddedTask && <TaskItem Task={taskInfo} />}
    </div>
  );
}

export default App;
