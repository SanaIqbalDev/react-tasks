import React from 'react'
import icon from './assets/ic_delete.png'
// require('.../ic_delete.png')
const TaskItem = ({ task }) => {


    return (

        <div className='task-container'>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <label className='taskname'>{task.name}</label>
                <img src={icon}/>
            </div>
            <label className='taskdetail'>{task.detail}</label>
            <label className='taskduedate'>{task.duedate}</label>
        </div>
    )
}

export default TaskItem