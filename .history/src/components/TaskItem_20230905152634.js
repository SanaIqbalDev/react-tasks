import React from 'react'
import { Checkbox } from '@mui/material'
const TaskItem = ({ task, onDelete, onStatusChange }) => {


    return (

        <div className='task-container'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className='taskname'>{task.name}</label>
                <div className='status' style={{ backgroundColor: task.isComplete ? 'green' : '#B60016' }}>
                    <Checkbox
                        defaultChecked
                        color="primary"
                        style ={{
                            color: "#00e676",
                          }}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <label style={{ fontSize: 'small', paddingRight: '5px' }}>{task.isComplete ? 'Completed' : 'Not Completed'}</label>
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