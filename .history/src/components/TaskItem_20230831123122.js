import React from 'react'

const TaskItem = ({taskInfo}) => {

    console.log("task is :", taskInfo)

    return (
        <div className='task-container'>
            <label>{taskInfo.name}</label>
            <label>{taskInfo.detail}</label>
            <label>{taskInfo.duedate}</label>
        </div>
    )
}

export default TaskItem