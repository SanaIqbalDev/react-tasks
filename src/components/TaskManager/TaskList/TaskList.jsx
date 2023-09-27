import React, { Fragment, useContext, useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Select from "react-select";
import clsx from "clsx";
import { TaskContext } from "../../../TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";
import "../../../style.css";

const TaskList = ({ onDelete, onEdit, onStatusChange }) => {
  const taskList = useContext(TaskContext);

  const [sortOption, setSortOption] = useState("");

  const [filteredTasks, setFilteredTasks] = useState(taskList);

  const [selectedCat, setSelectedCategory] = useState("all");

  const [searchInput, setSearchInput] = useState([]);

  const SORT_OPTIONS = [
    { value: "0", label: "Due Date" },
    { value: "1", label: "Priority" },
  ];

  const CUSTOM_THEME = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#3D6868",
      },
    };
  };
  let sortedList = [];

  const categoryClickHandler = (value) => {
    setSelectedCategory(value);
  };

  const sortTaskList = (inputList) => {
    if (sortOption.value === "0") {
      return sortByDueDate(inputList);
    } else if (sortOption.value === "1") {
      return sortByPriority(inputList);
    } else {
      return [...inputList];
    }
  };
  const sortByDueDate = (inputList) => {
    sortedList = inputList.sort(
      (a, b) =>
        Number(new Date(a.dueDate).getTime()) -
        Number(new Date(b.dueDate).getTime())
    );
    return [...sortedList];
  };
  const sortByPriority = (inputList) => {
    sortedList = inputList.filter((item) => item.priority === 3);

    sortedList = [
      ...sortedList,
      inputList.filter((item) => item.priority === 2),
    ].flat();

    sortedList = [
      ...sortedList,
      inputList.filter((item) => item.priority === 1),
    ].flat();

    return [...sortedList];
  };
  const updateFilteredList = () => {
    const newTaskList = taskList.filter(
      (task) => task.category === selectedCat
    );
    setFilteredTasks(sortTaskList([...newTaskList]));
  };

  useEffect(() => {
    if (selectedCat === "all") {
      setFilteredTasks(sortTaskList([...taskList]));
    } else {
      updateFilteredList();
    }
  }, [taskList, selectedCat]);

  useEffect(() => {
    setFilteredTasks(sortTaskList(filteredTasks));
  }, [sortOption]);

  useEffect(() => {
    setSelectedCategory("all");
    const temp_ = taskList.filter((item) => item.name.includes(searchInput));
    setFilteredTasks(temp_);
  }, [searchInput]);

  return (
    <>
      <div className={styles.taskList}>
        <hr></hr>
        <div className={styles.filterHeader}>
          <input
            type="search"
            placeholder="Search by name"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <Select
            theme={CUSTOM_THEME}
            options={SORT_OPTIONS}
            value={sortOption}
            onChange={setSortOption}
            placeholder={"Sort by:"}
            className={styles.select}
          />
        </div>
        <div className={styles.categoryHeading}>
          <label
            className={clsx(styles.category, {
              [styles.selectedCategory]: selectedCat === "all",
            })}
            onClick={() => {
              categoryClickHandler("all");
            }}
          >
            All
          </label>
          <label
            className={clsx(styles.category, {
              [styles.selectedCategory]: selectedCat === "official",
            })}
            onClick={() => {
              categoryClickHandler("official");
            }}
          >
            Official
          </label>
          <label
            className={clsx(styles.category, {
              [styles.selectedCategory]: selectedCat === "household",
            })}
            onClick={() => {
              categoryClickHandler("household");
            }}
          >
            Household
          </label>
          <label
            className={clsx(styles.category, {
              [styles.selectedCategory]: selectedCat === "personal",
            })}
            onClick={() => {
              categoryClickHandler("personal");
            }}
          >
            Personal
          </label>
        </div>
        <TransitionGroup>
          {filteredTasks &&
            filteredTasks.map((task) => (
              <CSSTransition key={task.id} timeout={500} classNames="item">
                <Fragment key={task.id}>
                  <TaskItem
                    task={task}
                    Expand
                    Down
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onStatusChange={onStatusChange}
                  />
                </Fragment>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </>
  );
};
export default TaskList;
