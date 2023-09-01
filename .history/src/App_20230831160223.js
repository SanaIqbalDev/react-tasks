import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {

  const [taskInfo, setTaskInfo] = useState('')

  const [taskList, setTaskList] = useState([])


  const ShowItem = (name, detail, duedate) => {

    const updatedTaskInfo = { name, detail, duedate };

    setTaskInfo(updatedTaskInfo);

    if(taskInfo){
      setTaskList([...taskList, taskInfo])
    }
    
    console.log("Current task is : " , taskInfo)

    console.log("Task List is : ", taskList)
  }

  return (

    <div className="container">

      <TaskForm onSubmit={ShowItem} />

      {/* {taskInfo && <TaskItem task={taskInfo} />} */}

     <TaskList tasks={taskList} />

    </div>

  );
}

export default App;
