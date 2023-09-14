import React, { Fragment } from "react";
import { Checkbox } from "@mui/material";
import deleteIcon from "../../assets/ic_delete.png";
const TaskItem = ({ task, onDelete, onStatusChange }) => {
  return (
    <>
      <div
        className="task-container"
        style={{
          borderWidth: "3px",
          borderStyle: "groove",
          borderColor:
            task.priority === 1
              ? "green"
              : task.priority === 2
                ? "yellow"
                : task.priority === 3
                  ? "orange"
                  : task.priority === 4
                    ? "red"
                    : "green",
        }}
      >
        <div className="first">
          <Checkbox
            checked={task.isComplete}
            color="primary"
            style={{
              color: "#81a7a7",
              transform: "scale(1.5)",
            }}
            onChange={(e) => onStatusChange(task.id, e.target.checked)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        <div className="second">
          <label className="taskname">{task.name}</label>
          <label className="taskdetail">{task.detail}</label>
          <label className="taskduedate">{task.duedate}</label>
        </div>
        <div className="third">
          <label
            className="status"
            style={{ backgroundColor: task.isComplete ? "green" : "#B60016" }}
          >
            {task.isComplete ? "Completed" : "Not Completed"}
          </label>
          <img
            src={deleteIcon}
            onClick={() => {
              onDelete(task.id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TaskItem;
