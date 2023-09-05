import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";


function App() {

  const [taskInfo, setTaskInfo] = useState('')

  const [taskList, setTaskList] = useState([])


  const ShowItem = (name, detail, duedate) => {

    const updatedTaskInfo = { name, detail, duedate };

    setTaskInfo(updatedTaskInfo);

    setTaskInfo(...taskInfo, taskInfo)

  }

  return (

    <div className="container">

      <TaskForm onSubmit={ShowItem} />

      {/* {taskInfo && <TaskItem task={taskInfo} />} */}

      {(taskList.length > 0) && <TaskList tasks={taskList} />}

    </div>

  );
}

export default App;