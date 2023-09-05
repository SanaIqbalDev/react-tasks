import React from 'react'
// import icon from "../../assets/images/ic_delete.png"
// require('../ic_delete.png')
const TaskItem = ({ task, onDelete, onStatusChange }) => {


    return (

        <div className='task-container'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className='taskname'>{task.name}</label>
                <div style={{ display: 'inline-flex', justifyContent: 'flex-end', alignSelf: 'end' }}>
                    <input type='checkbox' onChange={(e) => onStatusChange(task.id, e.target.checked)} />
                    <h6 style={{display:'inline-block'}}>{task.isComplete ? 'Completed' : 'Not Completed'}</h6>
                </div>

            </div>
            <label className='taskdetail'>{task.detail}</label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className='taskduedate'>{task.duedate}</label>

                <img src={require('../assets/ic_delete.png')} onClick={() => { onDelete(task.id) }} />
            </div>
        </div>
    )
}

export default TaskItem