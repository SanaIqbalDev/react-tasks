import React from 'react'

const TaskItem = (task) => {

    const { name, detail, duedate } = task

    return (
        <div className='task-container'>
            <label>name</label>
            <label>detail</label>
            <label>duedate</label>
        </div>
    )
}

export default TaskItem