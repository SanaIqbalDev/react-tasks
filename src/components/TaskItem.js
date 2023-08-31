import React from 'react'

const TaskItem = (task) => {

    console.log("Inside TaskItem component : ", task.task)
    const { name, detail, duedate } = task.task

    return (
        <div className='task-container'>
            <label>{name}</label>
            <label>{detail}</label>
            <label>{duedate}</label>
        </div>
    )
}

export default TaskItem