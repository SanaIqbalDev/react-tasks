import React, { Fragment, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete, onStatusChange }) => {
  const [taskList, setTaskList] = useState([]);

  const [filteredtasks, setFilteredtasks] = useState([]);

  const [selectedCat, setSelectedCategory] = useState("all");

  const CategoryClicked = (value) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    setTaskList([...tasks]);
  }, [tasks]);

  useEffect(() => {
    setFilteredtasks([...taskList]);
    selectedCat === "all"
      ? setFilteredtasks([...taskList])
      : updateFilteredList();
  }, [taskList]);

  useEffect(() => {
    selectedCat === "all"
      ? setFilteredtasks([...taskList])
      : updateFilteredList();
  }, [selectedCat]);

  const updateFilteredList = () => {
    const newTaskList = taskList.filter(
      (task) => task.category === selectedCat
    );
    setFilteredtasks([...newTaskList]);
  };
  return (
    <>
      <div className={styles.taskList}>
        <hr></hr>
        <div className={styles.categoryHeading}>
          <label
            className={
              selectedCat === "all" ? styles.selectedCategory : styles.category
            }
            onClick={() => {
              CategoryClicked("all");
            }}
          >
            All
          </label>
          <label
            className={
              selectedCat === "official"
                ? styles.selectedCategory
                : styles.category
            }
            onClick={() => {
              CategoryClicked("official");
            }}
          >
            Official
          </label>
          <label
            className={
              selectedCat === "household"
                ? styles.selectedCategory
                : styles.category
            }
            onClick={() => {
              CategoryClicked("household");
            }}
          >
            Household
          </label>
          <label
            className={
              selectedCat === "personal"
                ? styles.selectedCategory
                : styles.category
            }
            onClick={() => {
              CategoryClicked("personal");
            }}
          >
            Personal
          </label>
        </div>
        {filteredtasks &&
          filteredtasks.map((task) => (
            <Fragment key={task.id}>
              <TaskItem
                task={task}
                onDelete={onDelete}
                onStatusChange={onStatusChange}
              />
            </Fragment>
          ))}
      </div>
    </>
  );
};

export default TaskList;
