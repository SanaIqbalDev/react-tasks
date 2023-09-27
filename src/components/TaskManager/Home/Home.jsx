import { useContext, useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
import { TaskContext } from "../../../TaskContext";
import styles from "./Home.module.css";

const Home = ({ setTasks }) => {
  const tasksContextData = useContext(TaskContext);

  const [taskList, setTaskList] = useState(tasksContextData);

  const [isEdit, setIsEdit] = useState(false);

  const [selectedTask, setSelectedtask] = useState();

  const submitTaskHandler = (name, detail, dueDate, category, priority) => {
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

    setTaskList([...taskList, updatedTaskInfo]);
  };

  const deleteTaskHandler = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const statusChangeHandler = (taskId, isComplete) => {
    const completionDate = isComplete ? getDateToday() : undefined;
    const newTaskList = taskList.map((task) => {
      return task.id === taskId
        ? { ...task, isComplete: isComplete, completionDate: completionDate }
        : task;
    });

    setTaskList(newTaskList);
  };

  const editTaskHandler = (id) => {
    setSelectedtask(taskList.filter((task) => task.id === id)[0]);
    setIsEdit(true);
  };

  const taskUpdateHandler = (
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
    setTasks(taskList);
  }, [taskList]);

  return (
    <>
      <div className={styles.container}>
        <AddTaskForm onSubmit={submitTaskHandler} />

        {taskList.length > 0 && (
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
