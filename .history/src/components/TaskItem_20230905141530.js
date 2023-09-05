import React from 'react'
// import icon from "../../assets/images/ic_delete.png"
// require('../ic_delete.png')
const TaskItem = ({ task, onDelete, onStatusChange }) => {


    return (

        <div className='task-container'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className='taskname'>{task.name}</label>
                <img src={require('../assets/ic_delete.png')} onClick={() => { onDelete(task.id) }} />
            </div>
            <label className='taskdetail'>{task.detail}</label>
            <label className='taskduedate'>{task.duedate}</label>
            <div style={{ display: 'inline-flex', justifyContent: 'flex-end' }}>
                <input type='checkbox' onChange={(e) => onStatusChange(task.id, e.target.checked)} />
                <label>{task.isComplete ? 'Status: Completed' : 'Status: Not Completed'}</label>
            </div>
        </div>
    )
}

export default TaskItem