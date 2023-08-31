import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);
  const ShowItem = (isTrue,name,detail,duedate) => {
    setShowAddedTask(isTrue)
  }

  return (
    <div className="container">
     <TaskForm onSubmit = {ShowItem}/>
     {showAddedTask && <TaskItem/>}
    </div>
  );
}

export default App;
