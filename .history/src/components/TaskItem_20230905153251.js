import React from 'react'
import { Checkbox } from '@mui/material'
const TaskItem = ({ task, onDelete, onStatusChange }) => {


    return (

        <div className='task-container'>

            <div><Checkbox
                defaultChecked
                color="primary"
                style={{
                    color: "#81a7a7",
                }}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            /></div>
            <div>
                <label className='taskname'>{task.name}</label>
                <label className='taskdetail'>{task.detail}</label>
                <label className='taskduedate'>{task.duedate}</label>

            </div>
            <div>
                <label style={{ fontSize: 'small', paddingRight: '5px' }}>{task.isComplete ? 'Completed' : 'Not Completed'}</label>
                <img src={require('../assets/ic_delete.png')} onClick={() => { onDelete(task.id) }} />

            </div>
        </div>
    )
}

export default TaskItem