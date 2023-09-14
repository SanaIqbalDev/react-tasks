import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Home({ tasks, setTasks, idNew }) {
    const [taskList, setTaskList] = useState(tasks);
    const [id, setId] = useState(idNew);

    const ShowItem = (name, detail, duedate, category, priority) => {
        const isComplete = false;
        console.log(getDateToday());
        console.log("Id is ", id);
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

    const getDateToday = () => {
        const dateToday = new Date().toLocaleDateString("en", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });

        const newDate = new Date(dateToday);

        return (
            newDate.getFullYear() +
            "-" +
            (newDate.getMonth() + 1).toString().padStart(2, "0") +
            "-" +
            newDate.getDate().toString().padStart(2, "0")
        );
        // return `${year}-${month}-${date}`;
    };
    useEffect(() => {
        console.log("task is :", taskList);
        setTasks(taskList);
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
