import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Home({ tasks, setTasks }) {
    const [taskList, setTaskList] = useState(tasks);
    const [id, setId] = useState();

    setId(tasks[tasks.length - 1].id);

    const ShowItem = (name, detail, duedate, category, priority) => {
        const isComplete = false;
        console.log(getDateToday());
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
        setTasks(taskList);

        setId(id + 1);

        alert("Task added to the list successfully");
    };

    const deleteTask = (id) => {
        console.log("Delete item with id : ", id);
        setTaskList(taskList.filter((task) => task.id !== id));
        setTasks(taskList);
    };

    const onStatusChange = (taskId, isComplete) => {
        console.log("Status is : ", isComplete);

        const newTaskList = taskList.map((task) => {
            return task.id === taskId ? { ...task, isComplete: isComplete } : task;
        });

        setTaskList(newTaskList);
        setTasks(taskList);
    };

    const getDateToday = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();

        return `${month}-${date}-${year}`;
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
