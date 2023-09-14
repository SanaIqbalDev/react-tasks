import React from "react";
import styles from "./TaskInputForm.module.css";
import Select from "react-select";

const TaskInputForm = ({ name, detail, duedate, category, priority, onSubmit }) => {

    const [taskName, setTaskName] = useState("");
    const [detail, setDetail] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");


    const submitForm = (e) => {
        e.preventDefault();

        onSubmit(taskName, detail, dueDate, category.value, priority.value);

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
            <form className={styles.addTaskForm} onSubmit={submitForm}>
                <div className={styles.inputSection}>
                    <label>Name</label>
                    <input
                        className={styles.inputText}
                        type="text"
                        required
                        placeholder="Add task name"
                        value={name}
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
                        value={detail}
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
                        value={duedate}
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
                            value={category}
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
                            value={priority}
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
