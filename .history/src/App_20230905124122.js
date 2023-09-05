import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {

  const [taskList, setTaskList] = useState([])
  const [id, setId] = useState(1)


  const ShowItem = (name, detail, duedate, category) => {

    const isComplete = false
    const updatedTaskInfo = { id, name, detail, duedate, category, isComplete };

    setTaskList([...taskList, updatedTaskInfo])

    setId(id + 1)


  }

  const deleteTask = (id) => {
    console.log("Delete item with id : ", id)
    setTaskList(taskList.filter((task) => (task.id !== id)))
  }

  const onStatusChange = (taskId, isComplete) => {

    console.log("Status is : ", isComplete)

    const newTaskList = taskList.map(task => {
      return task.id === taskId ? { ...task, isComplete: isComplete } : task;
    });
    
    setTaskList(newTaskList);

    // setTaskList(taskList.map(task => { task.id === taskId ? { ...task, isComplete: isComplete } : task }))

    console.log("task is :", taskList)
  }


  return (

    <div className="container">

      <TaskForm onSubmit={ShowItem} />

      {(taskList.length > 0) && <TaskList tasks={taskList} onDelete={deleteTask} onStatusChange={onStatusChange} />}

    </div>

  );
}

export default App;
