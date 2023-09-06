import React from 'react'
import { Checkbox } from '@mui/material'
const TaskItem = ({ task, onDelete, onStatusChange }) => {


    return (

        <div className='task-container'  style={{backgroundColor:
            task.priority===1 ? '#24a824':
            task.priority===2?'#ffff1a' :
            task.priority===3? '#ff8000':
            task.priority===4? 'red':'#adebad'}}>

            <div className='first'>
                <Checkbox
                checked={task.isComplete}
                    color="primary"
                    style={{
                        color: "white",transform: "scale(1.5)",
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
                <label className='status' style={{ backgroundColor: task.isComplete ? 'green' : '#B60016' }}>{task.isComplete ? 'Completed' : 'Not Completed'}</label>
                <img src={require('../assets/ic_delete.png')} onClick={() => { onDelete(task.id) }} />

            </div>
        </div>
    )
}

export default TaskItem