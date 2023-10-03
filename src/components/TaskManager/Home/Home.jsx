import { useContext, useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
import { TaskContext } from "../../../TaskContext";
import styles from "./Home.module.css";

const Home = ({ onReload }) => {
  const tasksContextData = useContext(TaskContext);

  const [taskList, setTaskList] = useState(tasksContextData);

  const [isEdit, setIsEdit] = useState(false);

  const [selectedTask, setSelectedtask] = useState();
  let response;

  const addNewTaskHandler = async (
    name,
    detail,
    dueDate,
    category,
    priority
  ) => {
    const newTaskInfo = {
      name,
      detail,
      dueDate,
      startDate: getDateToday(),
      completionDate: "",
      category,
      priority,
      isComplete: false,
    };

    response = await fetch("http://127.0.0.1:5050/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskInfo),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    if (response.ok) {
      window.alert("New task added successfully.");
    }

    onReload();
  };

  const deleteTaskHandler = async (id) => {
    response = await fetch(`http://127.0.0.1:5050/tasks/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      window.alert("Task deleted successfully.");
    }

    onReload();
  };

  const statusChangeHandler = async (taskId, isComplete) => {
    const completionDate = isComplete ? getDateToday() : "";
    const editedTask = {
      isComplete: isComplete,
      completionDate: completionDate,
    };

    response = await fetch(`http://127.0.0.1:5050/tasks/complete/${taskId}`, {
      method: "PATCH",
      body: JSON.stringify(editedTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    onReload();
  };

  const editTaskHandler = (id) => {
    setSelectedtask(taskList.filter((task) => task._id === id)[0]);
    setIsEdit(true);
  };

  const updateTaskHandler = async (
    taskName,
    taskDetail,
    taskDueDate,
    taskCategory,
    taskPriority,
    taskId
  ) => {
    const editedTask = {
      name: taskName,
      detail: taskDetail,
      dueDate: taskDueDate,
      category: taskCategory,
      priority: taskPriority,
    };

    response = await fetch(`http://127.0.0.1:5050/tasks/${taskId}`, {
      method: "PATCH",
      body: JSON.stringify(editedTask),
      headers: {
        "Content-Type": "application/json",
      },
    });

    onReload();
    closeFormHandler();

    if (response.ok) {
      window.alert("Task information is updated successfully.");
    }
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
  const closeFormHandler = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    setTaskList(tasksContextData);
  }, [tasksContextData]);

  return (
    <>
      <div className={styles.container}>
        <AddTaskForm onSubmit={addNewTaskHandler} />

        {taskList && (
          <TaskList
            onDelete={deleteTaskHandler}
            onEdit={editTaskHandler}
            onStatusChange={statusChangeHandler}
          />
        )}
        {isEdit && (
          <EditTaskForm
            task={selectedTask}
            onSubmit={updateTaskHandler}
            onClose={closeFormHandler}
          />
        )}
      </div>
    </>
  );
};

export default Home;
