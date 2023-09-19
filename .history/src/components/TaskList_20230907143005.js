import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onStatusChange }) => {
    const [taskList, setTaskList] = useState([]);

    const [filteredtasks, setFilteredtasks] = useState([]);

    const [selectedCat, setSelectedCategory] = useState("all");

    const CategoryClicked = (value) => {
        setSelectedCategory(value);
    };

    useEffect(() => {
        setTaskList([...tasks]);
    }, [tasks]); //whenever tasks property value changes , it will execute code inside useEffect function...

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
            <div className="task-list">
                <hr></hr>
                <div className="category-heading">
                    <label
                        className={selectedCat === "all" ? "selected-category" : "category"}
                        onClick={() => {
                            CategoryClicked("all");
                        }}
                    >
                        All
                    </label>
                    <label
                        className={
                            selectedCat === "official" ? "selected-category" : "category"
                        }
                        onClick={() => {
                            CategoryClicked("official");
                        }}
                    >
                        Official
                    </label>
                    <label
                        className={
                            selectedCat === "household" ? "selected-category" : "category"
                        }
                        onClick={() => {
                            CategoryClicked("household");
                        }}
                    >
                        Household
                    </label>
                    <label
                        className={
                            selectedCat === "personal" ? "selected-category" : "category"
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
