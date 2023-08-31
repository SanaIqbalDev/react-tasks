import React from 'react'

const TaskItem = (props) => {

    console.log("Inside TaskItem component : ", props.task)
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