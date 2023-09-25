import React from "react";
import { Checkbox } from "@mui/material";
import deleteIcon from "../../../assets/ic_delete.png";
import editIcon from "../../../assets/ic_edit.png";
import styles from "./TaskItem.module.css";
const TaskItem = ({ task, onDelete, onEdit, onStatusChange }) => {

  const { id, name, detail, dueDate, priority, isComplete } = task;

  return (
    <>
      <div
        className={styles.taskContainer}
        style={{
          borderWidth: "3px",
          borderStyle: "groove",
          borderColor:
            priority === 1
              ? "green"
              : priority === 2
                ? "yellow"
                : priority === 3
                  ? "red"
                  : "green",
        }}
      >
        <div className={styles.first}>
          <Checkbox
            checked={isComplete}
            color="primary"
            style={{
              color: "#81a7a7",
              transform: "scale(1.5)",
            }}
            onChange={(e) => onStatusChange(id, e.target.checked)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        <div className={styles.second}>
          <label className={styles.taskName}>{name}</label>
          <label className={styles.taskDetails}>{detail}</label>
          <label className={styles.taskDueDate}>{dueDate}</label>
        </div>
        <div className={styles.third}>
          <label
            className={styles.status}
            style={{ backgroundColor: isComplete ? "green" : "#B60016" }}
          >
            {isComplete ? "Completed" : "Not Completed"}
          </label>

          <div>
            <img alt="edit icon"
              src={editIcon}
              onClick={() => {
                onEdit(id);
              }}
            />

            <img alt="delete icon"
              src={deleteIcon}
              onClick={() => {
                onDelete(id);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
