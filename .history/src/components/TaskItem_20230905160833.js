import React from 'react'
import { Checkbox } from '@mui/material'
const TaskItem = ({ task, onDelete, onStatusChange }) => {


    return (

        <div className='task-container'>

            <div className='first'>
                <Checkbox
                    defaultChecked
                    color="primary"
                    style={{
                        color: "#81a7a7",transform: "scale(1.5)",
                    }}
                    onChange={(e)=>onStatusChange(task.id, e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
            <div className='second'>
                <label className='taskname'>{task.name}</label>
                <label className='taskdetail'>{task.detail}</label>
                <label className='taskduedate'>{task.duedate}</label>

            </div>
            <div className='third'>
                <label className='status'>{task.isComplete ? 'Completed' : 'Not Completed'}</label>
                <img src={require('../assets/ic_delete.png')} onClick={() => { onDelete(task.id) }} />

            </div>
        </div>
    )
}

export default TaskItem