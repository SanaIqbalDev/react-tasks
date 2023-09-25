import React from "react";
import styles from "./TaskInputForm.module.css";
import Select from "react-select";
import { useState } from "react";

const TaskInputForm = ({ task, onSubmit }) => {


    const { name, detail, dueDate, category, priority } = task ? task : {};

    const CATEGORY_OPTIONS = [
        { value: "official", label: "Official" },
        { value: "household", label: "Household" },
        { value: "personal", label: "Personal" },
    ];

    const PRIORITY_OPTIONS = [
        { value: 3, label: "High" },
        { value: 2, label: "Normal" },
        { value: 1, label: "Low" },
    ];

    const [taskName, setTaskName] = useState(name);
    const [taskDetail, setDetail] = useState(detail);
    const [taskDueDate, setDueDate] = useState(dueDate);
    const [taskCategory, setCategory] = useState(
        category === CATEGORY_OPTIONS[0].value
            ? CATEGORY_OPTIONS[0]
            : category === CATEGORY_OPTIONS[1].value
                ? CATEGORY_OPTIONS[1]
                : category === CATEGORY_OPTIONS[2].value
                    ? CATEGORY_OPTIONS[2]
                    : undefined
    );
    const [taskPriority, setTaskPriority] = useState(
        priority === PRIORITY_OPTIONS[0].value
            ? PRIORITY_OPTIONS[0]
            : priority === PRIORITY_OPTIONS[1].value
                ? PRIORITY_OPTIONS[1]
                : priority === PRIORITY_OPTIONS[2].value
                    ? PRIORITY_OPTIONS[2]
                    : undefined
    );

    const submitFormHandler = (e) => {
        e.preventDefault();

        onSubmit(
            taskName,
            taskDetail,
            taskDueDate,
            taskCategory.value,
            taskPriority.value,
            task.id
        );

        setTaskName("");
        setDetail("");
        setDueDate("");
        setCategory("");
        setTaskPriority("");
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

    const CUSTOM_THEME = (theme) => {
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
            <form className={styles.addTaskForm} onSubmit={submitFormHandler}>
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
                            theme={CUSTOM_THEME}
                            options={CATEGORY_OPTIONS}
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
                            theme={CUSTOM_THEME}
                            options={PRIORITY_OPTIONS}
                            isClearable
                            isSearchable
                            autoFocus
                            required
                            value={taskPriority}
                            onChange={setTaskPriority}
                            placeholder={"Select priority"}
                            className={styles.select}
                        />
                    </div>
                </div>
                <input
                    className={styles.submitBtn}
                    type="Submit"
                    value={task.name === undefined ? "Add Task" : "Update Task"}
                    readOnly
                />
            </form>
        </>
    );
};

export default TaskInputForm;
