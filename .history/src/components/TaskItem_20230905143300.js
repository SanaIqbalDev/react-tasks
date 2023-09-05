import React from 'react'
// import icon from "../../assets/images/ic_delete.png"
// require('../ic_delete.png')
const TaskItem = ({ task, onDelete, onStatusChange }) => {


    return (

        <div className='task-container'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className='taskname'>{task.name}</label>
                <div className='status'>
                    <input type='checkbox' onChange={(e) => onStatusChange(task.id, e.target.checked)} />
                    <label style={{fontSize:'small', backgroundColor:{task.isComplete?'red':'blue'}}}>{task.isComplete ? 'Completed' : 'Not Completed'}</label>
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