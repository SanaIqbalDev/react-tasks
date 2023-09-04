import React from 'react'

const TaskItem = (task) => {

    const { name, detail, duedate, category } = task.task

    return (
        <li className='task-container'>
            <label className='taskname'>{name}</label>
            <label className='taskdetail'>{detail}</label>
            <label className='taskduedate'>{duedate}</label>
        </li>
    )
}

export default TaskItem