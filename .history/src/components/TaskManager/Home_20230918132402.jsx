import { useContext, useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import styles from "./Home.module.css";
import EditTaskForm from "./EditTaskForm";
import { TaskContext } from "../../TaskContext";

function Home({ tasks, setTasks, idNew }) {
    const [taskList, setTaskList] = useState(tasks);
    const taskVal = useContext(TaskContext);
    const [id, setId] = useState(idNew);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedTask, setSelectedtask] = useState();

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
        console.log("context task is : ", taskVal)
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
        setSelectedtask(taskList.filter((task) => task.id === id)[0]);
        setIsEdit(true);
    };

    const UpdateItem = (
        taskName,
        taskDetail,
        taskDueDate,
        taskCategory,
        taskPriority,
        taskId
    ) => {
        console.log(
            "task details are :",
            taskName,
            taskDetail,
            taskDueDate,
            taskCategory,
            taskPriority,
            taskId
        );

        const updatesTaskList = taskList.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    name: taskName,
                    detail: taskDetail,
                    duedate: taskDueDate,
                    category: taskCategory,
                    priority: taskPriority,
                };
            } else {
                return task;
            }
        });
        setTaskList(updatesTaskList);

        closeForm();
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
    const closeForm = () => {
        setIsEdit(false);
    };
    useEffect(() => {
        console.log("task is :", taskList);
        setTasks(taskList);
    }, [taskList]);

    return (
        <>
            <div className={styles.container}>
                <AddTaskForm onSubmit={ShowItem} />

                {taskList.length > 0 && (
                    <TaskList
                        tasks={taskList}
                        onDelete={deleteTask}
                        onEdit={editTask}
                        onStatusChange={onStatusChange}
                    />
                )}

                {isEdit && (
                    <EditTaskForm
                        task={selectedTask}
                        onSubmit={UpdateItem}
                        closeForm={closeForm}
                    />
                )}
            </div>
        </>
    );
}

export default Home;
