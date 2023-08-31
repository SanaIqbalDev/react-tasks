import React from 'react'

const TaskItem = (taskInfo) => {

    const { name, detail, duedate } = taskInfo.taskInfo

    return (
        <div className='task-container'>
            <label>name</label>
            <label>detail</label>
            <label>duedate</label>
        </div>
    )
}

export default TaskItem