import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);
  const onSubmit = (isTrue) => {
    setShowAddedTask = isTrue
  }

  return (
    <div className="container">
     <TaskForm onSubmit={onSubmit}/>
     {showAddedTask && <TaskItem {}/>}
    </div>
  );
}

export default App;
