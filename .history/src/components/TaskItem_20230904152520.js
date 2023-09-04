import React from 'react'
import icon from "../assets/images/ic_delete.png"
// require('../ic_delete.png')
const TaskItem = ({ task }) => {


    return (

        <div className='task-container'>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <label className='taskname'>{task.name}</label>
                {console.log(process.env.PUBLIC_URL + '/assets/ic_delete.png')}
                <img src={icon}/>
            </div>
            <label className='taskdetail'>{task.detail}</label>
            <label className='taskduedate'>{task.duedate}</label>
        </div>
    )
}

export default TaskItem