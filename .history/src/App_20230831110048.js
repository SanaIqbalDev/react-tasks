import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);
  const ShowItem = (isTrue,name,detail,duedate) => {
    setShowAddedTask = isTrue
    // console.log(isTrue + " " + name + " " + detail + " " + duedate)
  }

  return (
    <div className="container">
     <TaskForm onSubmit = {ShowItem}/>
     {showAddedTask && <TaskItem/>}
    </div>
  );
}

export default App;
