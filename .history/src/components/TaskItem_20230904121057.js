import React from 'react'

const TaskItem = ({task}) => {

    // console.log("On task item :", task.name, task.detail, task.duedate)
    // const { name, detail, duedate } = task

    return (
        <div className='task-container'>
            <label className='taskname'>{task.name}</label>
            <label className='taskdetail'>{task.detail}</label>
            <label className='taskduedate'>{task.duedate}</label>
        </div>
    )
}

export default TaskItem