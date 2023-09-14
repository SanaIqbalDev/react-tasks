import React, { useEffect } from "react";
import styles from "./TaskInputForm.module.css";
import Select from "react-select";
import { useState } from "react";

const TaskInputForm = ({ task, onSubmit }) => {
    console.log("Receved task is :", task);

    const {
        name,
        detail,
        duedate,
        category,
        priority,
    } = task ? task : {};

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



    const [taskName, setTaskName] = useState(name);
    const [taskDetail, setDetail] = useState(detail);
    const [taskDueDate, setDueDate] = useState(duedate);
    const [taskCategory, setCategory] = useState(category == categoryOptions[0].value ? categoryOptions[0] : (category == categoryOptions[1].value ? categoryOptions[1] : (category == categoryOptions[2].value ? categoryOptions[2] : undefined)));
    const [taskPriority, setPriority] = useState(priority == priorityOptions[0].value ? priorityOptions[0] : (priority == priorityOptions[1].value ? priorityOptions[1] : (priority == priorityOptions[2].value ? priorityOptions[2] : undefined)));

    const submitForm = (e) => {
        e.preventDefault();

        onSubmit(taskName, taskDetail, taskDueDate, taskCategory.value, taskPriority.value);

        setTaskName("");
        setDetail("");
        setDueDate("");
        setCategory("");
        setPriority("");
    };

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

    // useEffect = () => {
    //     setCategory(taskCategory)
    //     setPriority(taskPriority)
    // }
    return (
        <>
            <form className={styles.addTaskForm} onSubmit={submitForm}>
                <div className={styles.inputSection}>
                    <label>Name</label>
                    <input
                        className={styles.inputText}
                        type="text"
                        required
                        placeholder="Add task name"
                        value={taskName}
                        onChange={(e) => {
                            setTaskName(e.target.value);
                        }}
                    />
                </div>

                <div className={styles.inputSection}>
                    <label>Detail</label>
                    <input
                        className={styles.inputText}
                        type="text"
                        required
                        placeholder="Add task detail"
                        value={taskDetail}
                        onChange={(e) => {
                            setDetail(e.target.value);
                        }}
                    />
                </div>

                <div className={styles.inputSection}>
                    <label>Due Date</label>
                    <input
                        className={styles.inputText}
                        type="date"
                        min={minDate}
                        required
                        placeholder="Add task due date"
                        value={taskDueDate}
                        onChange={(e) => {
                            setDueDate(e.target.value);
                        }}
                    />
                </div>

                <div
                    className={styles.inputSection}
                    style={{
                        marginTop: "10%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ width: "40%" }}>
                        <label>Category</label>
                        <Select
                            theme={customTheme}
                            options={categoryOptions}

                            isClearable
                            isSearchable
                            autoFocus
                            required
                            value={taskCategory}
                            onChange={setCategory}
                            placeholder={"Select category"}
                            className={styles.select}
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <label>Priority</label>
                        <Select
                            theme={customTheme}
                            options={priorityOptions}
                            isClearable
                            isSearchable
                            autoFocus
                            menuPlacement="auto"
                            menuPosition="fixed"
                            required
                            value={taskPriority}
                            onChange={setPriority}
                            placeholder={"Select priority"}
                            className={styles.select}
                        />
                    </div>
                </div>
                <input
                    className={styles.submitBtn}
                    type="Submit"
                    value={"Submit Task"}
                    readOnly
                />
            </form>
        </>
    );
};

export default TaskInputForm;
