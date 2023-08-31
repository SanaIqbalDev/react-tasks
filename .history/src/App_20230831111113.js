import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";


function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);
  const [taskInfo, setTaskInfo] = useState('a', 'b', 'c')

  const ShowItem = (isTrue, name, detail, duedate) => {
    setTaskInfo(name, detail, duedate);
    setShowAddedTask(isTrue)
    console.log(name, detail, duedate);
  }

  return (
    <div className="container">
      <TaskForm onSubmit={ShowItem} />
      {showAddedTask && <TaskItem Task={taskInfo} />}
    </div>
  );
}

export default App;
