import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  // const [showAddedTask, setShowAddedTask] = useState(false);
  const [taskInfo, setTaskInfo] = useState([])

  const ShowItem = (name, detail, duedate) => {


    const updatedTaskInfo = [name,detail,duedate];

    setTaskInfo(updatedTaskInfo);

    // setShowAddedTask(isTrue)
  }
  // useEffect(() => {
  //   console.log(taskInfo); // Log the updated taskInfo here
  // }, [taskInfo]);
  return (
    <div className="container">
      <TaskForm onSubmit={ShowItem} />
      {(taskInfo.length>0) && <TaskItem Task={taskInfo} />}
    </div>
  );
}

export default App;
