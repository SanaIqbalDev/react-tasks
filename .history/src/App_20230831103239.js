import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);

  return (
    <div className="container">
     <TaskForm/>
     {showAddedTask && <TaskItem/>}
    </div>
  );
}

export default App;
