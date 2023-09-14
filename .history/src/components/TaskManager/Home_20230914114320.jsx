import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./AddTaskForm";
import styles from "./Home.module.css";
import TaskEdit from "./EditTaskForm";
import EditTaskForm from "./EditTaskForm";

function Home({ tasks, setTasks, idNew }) {
    const [taskList, setTaskList] = useState(tasks);
    const [id, setId] = useState(idNew);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedTask, setSelectedtask] = useState()

    const ShowItem = (name, detail, duedate, category, priority) => {
        const isComplete = false;
        const startDate = getDateToday();
        const completionDate = undefined;
        console.log("Id is ", id);
        const updatedTaskInfo = {
            id,
            name,
            detail,
            duedate,
            startDate,
            completionDate,
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

        const completionDate = isComplete ? getDateToday() : undefined;

        const newTaskList = taskList.map((task) => {
            return task.id === taskId
                ? { ...task, isComplete: isComplete, completionDate: completionDate }
                : task;
        });

        setTaskList(newTaskList);
    };

    const editTask = (id) => {

        setSelectedtask(taskList.filter((task) => task.id === id));
        setIsEdit(true)

    }

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
    };
    useEffect(() => {
        console.log("task is :", taskList);
        setTasks(taskList);
    }, [taskList]);

    return (
        <>
            <div className={styles.container}>
                <TaskForm onSubmit={ShowItem} />

                {taskList.length > 0 && (
                    <TaskList
                        tasks={taskList}
                        onDelete={deleteTask}
                        onEdit={editTask}
                        onStatusChange={onStatusChange}
                    />
                )}

                {isEdit && <EditTaskForm task={selectedTask} />}
            </div>
        </>
    );
}

export default Home;
