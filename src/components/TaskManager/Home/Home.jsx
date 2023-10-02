import { useContext, useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
import { TaskContext } from "../../../TaskContext";
import styles from "./Home.module.css";

const Home = ({ setTasks, refetchTaskList }) => {
  const tasksContextData = useContext(TaskContext);

  const [taskList, setTaskList] = useState(tasksContextData);

  const [isEdit, setIsEdit] = useState(false);

  const [selectedTask, setSelectedtask] = useState();

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

    await fetch("http://127.0.0.1:5050/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskInfo),
    }).catch((error) => {
      window.alert(error);
      console.log("Error while adding new task");

      return;
    });

    refetchTaskList();
  };

  const deleteTaskHandler = async (id) => {
    console.log(`deleting task with id : ${id}`);

    await fetch(`http://127.0.0.1:5050/tasks/${id}`, {
      method: "DELETE",
    });

    setTaskList(taskList.filter((task) => task._id !== id));
  };

  const statusChangeHandler = async (taskId, isComplete) => {
    const completionDate = isComplete ? getDateToday() : "";
    const newTaskList = taskList.map((task) => {
      return task._id === taskId
        ? { ...task, isComplete: isComplete, completionDate: completionDate }
        : task;
    });

    setTaskList(newTaskList);

    const editedTask = {
      isComplete: isComplete,
      completionDate: completionDate,
    };

    await fetch(`http://127.0.0.1:5050/tasks/${taskId}`, {
      method: "PATCH",
      body: JSON.stringify(editedTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const editTaskHandler = (id) => {
    setSelectedtask(taskList.filter((task) => task._id === id)[0]);
    setIsEdit(true);
  };

  const taskUpdateHandler = async (
    taskName,
    taskDetail,
    taskDueDate,
    taskCategory,
    taskPriority,
    taskId
  ) => {
    const updatesTaskList = taskList.map((task) => {
      if (task._id === taskId) {
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

    const editedTask = {
      name: taskName,
      detail: taskDetail,
      dueDate: taskDueDate,
      category: taskCategory,
      priority: taskPriority,
    };

    console.log("Update task with id : ", taskId);

    await fetch(`http://127.0.0.1:5050/tasks/${taskId}`, {
      method: "PATCH",
      body: JSON.stringify(editedTask),
      headers: {
        "Content-Type": "application/json",
      },
    });

    closeFormHandler();
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

  useEffect(() => {
    setTasks(taskList);
  }, [taskList]);

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
            onSubmit={taskUpdateHandler}
            onClose={closeFormHandler}
          />
        )}
      </div>
    </>
  );
};

export default Home;
