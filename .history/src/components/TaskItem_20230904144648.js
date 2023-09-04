import React from 'react'

const TaskItem = ({ task }) => {


    return (

        <div className='task-container'>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <label className='taskname'>{task.name}</label>
                <img>Delete</img>
            </div>
            <label className='taskdetail'>{task.detail}</label>
            <label className='taskduedate'>{task.duedate}</label>
        </div>
    )
}

export default TaskItem