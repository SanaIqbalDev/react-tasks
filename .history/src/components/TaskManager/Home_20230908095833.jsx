import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Home() {
    const [taskList, setTaskList] = useState([]);
    const [id, setId] = useState(1);

    const ShowItem = (name, detail, duedate, category, priority) => {
        const isComplete = false;
        const updatedTaskInfo = {
            id,
            name,
            detail,
            duedate,
            category,
            priority,
            isComplete,
        };

        setTaskList([...taskList, updatedTaskInfo]);

        setId(id + 1);

        alert("Task added to the list successfully");
    };

    const deleteTask = (id) => {
        console.log("Delete item with id : ", id);
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    const onStatusChange = (taskId, isComplete) => {
        console.log("Status is : ", isComplete);

        const newTaskList = taskList.map((task) => {
            return task.id === taskId ? { ...task, isComplete: isComplete } : task;
        });

        setTaskList(newTaskList);
    };

    useEffect(() => {
        console.log("task is :", taskList);
    }, [taskList]);

    return (
        <>
            <div className="container">
                <TaskForm onSubmit={ShowItem} />

                {taskList.length > 0 && (
                    <TaskList
                        tasks={taskList}
                        onDelete={deleteTask}
                        onStatusChange={onStatusChange}
                    />
                )}
            </div>
        </>
    );
}

export default Home;
