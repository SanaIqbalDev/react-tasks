import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {

  const [taskList, setTaskList] = useState([])

  const ShowItem = (name, detail, duedate, category) => {

    console.log("Details are: ", name, detail,duedate,category);

    const updatedTaskInfo = { name, detail, duedate, category };

    setTaskList([...taskList, updatedTaskInfo])

    console.log("Task List is : ", taskList)
  }

  return (

    <div className="container">

      <TaskForm onSubmit={ShowItem} />

      {(taskList.length>0) && <TaskList tasks={taskList} />}

    </div>

  );
}

export default App;
