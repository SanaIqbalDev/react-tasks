import React from 'react'

const TaskItem = ({ task }) => {


    return (

        <div className='task-container'>
            {console.log("task name is : ", task.name)}
            <label className='taskname'>{task.name}</label>
            <label className='taskdetail'>{task.detail}</label>
            <label className='taskduedate'>{task.duedate}</label>
        </div>
    )
}

export default TaskItem