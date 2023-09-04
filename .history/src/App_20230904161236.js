import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {

  const [taskList, setTaskList] = useState([])
  const [id, setId] = useState(1)


  const ShowItem = (name, detail, duedate, category) => {

    const updatedTaskInfo = {id, name, detail, duedate, category };

    setTaskList([...taskList, updatedTaskInfo])

    setId(id+1)


  }

  const deleteTask = (id) => {
    console.log("Delete item with id : " , id)
    setTaskList(taskList.filter((task) => {task.id !== id}))
  }

  return (

    <div className="container">

      <TaskForm onSubmit={ShowItem} />

      {(taskList.length > 0) && <TaskList tasks={taskList} onDelete={deleteTask} />}

    </div>

  );
}

export default App;
