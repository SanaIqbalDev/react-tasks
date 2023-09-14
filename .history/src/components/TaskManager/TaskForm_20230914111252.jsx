import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import styles from "./TaskForm.module.css";
import TaskInputForm from "./TaskInputForm";

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");
  const [detail, setDetail] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const dateToday = new Date().toLocaleDateString("en", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const newDate = new Date(dateToday);

  const minDate =
    newDate.getFullYear() +
    "-" +
    (newDate.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    newDate.getDate().toString().padStart(2, "0");

  const categoryOptions = [
    { value: "official", label: "Official" },
    { value: "household", label: "Household" },
    { value: "personal", label: "Personal" },
  ];

  const priorityOptions = [
    { value: 3, label: "High" },
    { value: 2, label: "Normal" },
    { value: 1, label: "Low" },
  ];

  const submitForm = (e) => {
    e.preventDefault();

    onSubmit(taskName, detail, dueDate, category.value, priority.value);

    setTaskName("");
    setDetail("");
    setDueDate("");
    setCategory("");
    setPriority("");
  };

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "#3D6868",
      },
    };
  };

  return (
    <>
      <div className={styles.headerDiv}>
        <h2>ADD TASK</h2>
        <button className={styles.viewStats}>
          <Link className={styles.statsLink} to={"/Statistics"}>
            Statistics
          </Link>
        </button>
      </div>
      <TaskInputForm />
    </>
  );
};

export default TaskForm;
