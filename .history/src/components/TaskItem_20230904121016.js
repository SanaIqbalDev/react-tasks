import React from 'react'

const TaskItem = ({task}) => {

    console.log("On task item :", task.name, task.detail, task.duedate)
    const { name, detail, duedate } = task

    return (
        <div className='task-container'>
            <label className='taskname'>{name}</label>
            <label className='taskdetail'>{detail}</label>
            <label className='taskduedate'>{duedate}</label>
        </div>
    )
}

export default TaskItem