import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {

  const [taskList, setTaskList] = useState([])

  const ShowItem = (name, detail, duedate) => {

    const updatedTaskInfo = { name, detail, duedate };

      setTaskList([...taskList, updatedTaskInfo])

    console.log("Task List is : ", taskList)
  }

  return (

    <div className="container">

      <TaskForm onSubmit={ShowItem} />

     <TaskList className='tasklist' tasks={taskList} />

    </div>

  );
}

export default App;
