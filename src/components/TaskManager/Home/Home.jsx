import { useContext, useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import styles from "./Home.module.css";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
import { TaskContext } from "../../../TaskContext";

const Home = () => {
    const contextVal = useContext(TaskContext);

    const [taskList, setTaskList] = useState([]);

    const [isEdit, setIsEdit] = useState(false);

    const [selectedTask, setSelectedtask] = useState();

    const onSubmitNewTask = (name, detail, dueDate, category, priority) => {
        const updatedTaskInfo = {
            id: new Date().getTime(),
            name,
            detail,
            dueDate,
            startDate: getDateToday(),
            completionDate: undefined,
            category,
            priority,
            isComplete: false,
        };

        console.log("New Task Added :", updatedTaskInfo);
        setTaskList([...taskList, updatedTaskInfo]);
    };

    const onDeleteTask = (id) => {
        console.log("Delete item : ", id);
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    const onTaskStatusChange = (taskId, isComplete) => {
        const completionDate = isComplete ? getDateToday() : undefined;
        const newTaskList = taskList.map((task) => {
            return task.id === taskId
                ? { ...task, isComplete: isComplete, completionDate: completionDate }
                : task;
        });

        setTaskList(newTaskList);
    };

    const onEditTask = (id) => {
        setSelectedtask(taskList.filter((task) => task.id === id)[0]);
        setIsEdit(true);
    };

    const onUpdateTask = (
        taskName,
        taskDetail,
        taskDueDate,
        taskCategory,
        taskPriority,
        taskId
    ) => {
        const updatesTaskList = taskList.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    name: taskName,
                    detail: taskDetail,
                    dueDate: taskDueDate,
                    category: taskCategory,
                    priority: taskPriority,
                };
            } else {
                return task;
            }
        });
        setTaskList(updatesTaskList);

        onCloseForm();
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
    };
    const onCloseForm = () => {
        setIsEdit(false);
    };

    useEffect(() => {
        setTaskList(contextVal);
    }, [contextVal]);

    return (
        <>
            <div className={styles.container}>
                <AddTaskForm onSubmit={onSubmitNewTask} />

                {taskList.length > 0 && (
                    <TaskList
                        onDelete={onDeleteTask}
                        onEdit={onEditTask}
                        onStatusChange={onTaskStatusChange}
                    />
                )}
                {isEdit && (
                    <EditTaskForm
                        task={selectedTask}
                        onSubmit={onUpdateTask}
                        onClose={onCloseForm}
                    />
                )}
            </div>
        </>
    );
};

export default Home;
