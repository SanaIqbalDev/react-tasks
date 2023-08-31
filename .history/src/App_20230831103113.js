import TaskForm from "./components/TaskForm";

function App() {

  const [showAddedTask, setShowAddedTask] = useState(false);

  return (
    <div className="container">
     <TaskForm/>
    </div>
  );
}

export default App;
