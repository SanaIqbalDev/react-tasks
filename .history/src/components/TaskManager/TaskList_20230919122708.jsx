import React, { Fragment, useContext, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
import { TaskContext } from "../../TaskContext"


const TaskList = ({ onDelete, onEdit, onStatusChange }) => {

  const taskList = useContext(TaskContext);

  const [filteredtasks, setFilteredtasks] = useState(taskList);

  const [selectedCat, setSelectedCategory] = useState("all");

  const CategoryClicked = (value) => {
    setSelectedCategory(value);
  };

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
                onEdit={onEdit}
                onStatusChange={onStatusChange}
              />
            </Fragment>
          ))}
      </div>
    </>
  );
};

export default TaskList;
