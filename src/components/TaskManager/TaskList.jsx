import React, { Fragment, useContext, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
import Select from "react-select";
import { TaskContext } from "../../TaskContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../style.css"

const TaskList = ({ onDelete, onEdit, onStatusChange }) => {
  const taskList = useContext(TaskContext);

  const [sortOption, setSortOption] = useState("");

  const [filteredtasks, setFilteredtasks] = useState(taskList);

  const [selectedCat, setSelectedCategory] = useState("all");

  const [nameList, setNameList] = useState([]);

  const [searchInput, setSearchInput] = useState([]);

  const sortOptions = [
    { value: "0", label: "Due Date" },
    { value: "1", label: "Priority" },
  ];

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#3D6868",
      },
    };
  };
  const CategoryClicked = (value) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    if (selectedCat === "all") {
      setFilteredtasks(SortTaskList([...taskList]));
    } else {
      updateFilteredList();
    }
  }, [taskList]);

  useEffect(() => {
    selectedCat === "all"
      ? setFilteredtasks(SortTaskList([...taskList]))
      : updateFilteredList();
  }, [selectedCat]);

  const updateFilteredList = () => {
    const newTaskList = taskList.filter(
      (task) => task.category === selectedCat
    );
    setFilteredtasks(SortTaskList([...newTaskList]));
  };

  useEffect(() => {
    setFilteredtasks(SortTaskList(filteredtasks));
  }, [sortOption]);

  useEffect(() => {
    const temp = filteredtasks.map((task) => task.name);
    setNameList(temp);
    console.log("temp is: ", temp);
    console.log("namelist is:", nameList);
  }, [filteredtasks]);

  const SortTaskList = (inputList) => {
    if (sortOption.value === "0") {
      return SortByDueDate(inputList);
    } else if (sortOption.value === "1") {
      return SortByPriority(inputList);
    } else {
      return [...inputList];
    }
  };

  const SortByDueDate = (inputList) => {
    var SortedList = [];
    SortedList = inputList.sort(
      (a, b) =>
        Number(new Date(a.duedate).getTime()) -
        Number(new Date(b.duedate).getTime())
    );
    console.log(SortedList);
    return [...SortedList];
  };

  const SortByPriority = (inputList) => {
    var SortedList = [];

    SortedList = inputList.filter((item) => item.priority === 3);

    SortedList = [
      ...SortedList,
      inputList.filter((item) => item.priority === 2),
    ].flat();

    SortedList = [
      ...SortedList,
      inputList.filter((item) => item.priority === 1),
    ].flat();

    return [...SortedList];
  };

  useEffect(() => {
    setSelectedCategory("all");
    const temp_ = taskList.filter((item) => item.name.includes(searchInput));
    setFilteredtasks(temp_);
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
            theme={customTheme}
            options={sortOptions}
            value={sortOption}
            onChange={setSortOption}
            placeholder={"Sort by:"}
            className={styles.select}
          />
        </div>
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
        <TransitionGroup>
          {filteredtasks &&
            filteredtasks.map((task) => (
              <CSSTransition
                key={task.id}
                timeout={500}
                classNames="item"
              >
                <Fragment key={task.id}>
                  <TaskItem
                    task={task}
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
