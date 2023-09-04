import React from 'react'

const TaskItem = ({task}) => {

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