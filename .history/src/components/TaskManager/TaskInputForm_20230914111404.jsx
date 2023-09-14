import React from "react";
import styles from "./TaskInputForm.module.css"

const TaskInputForm = ({ name, detail, duedate, category, priority }) => {
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
