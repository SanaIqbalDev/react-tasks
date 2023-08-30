import React, { useState } from 'react'

const TaskForm = () => {
    const [taskName, setTaskName] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('')

  return (
    <div>
        <h2 className='heading'>ADD TASK</h2>
        <form className='add-task-form'>
            <div className='input-section'>
                <label>Task name</label>
                <input type='text' placeholder='Add task name' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <div className='input-section'>
                <label>Task detail</label>
                <input type='text' placeholder='Add task detail' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <div className='input-section'>
                <label>Task DueDate</label>
                <input type='text' placeholder='Add task duedate' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <input className='submit-btn' type='Submit' value={'Submit Task'} />
        </form>
    </div>
  )
}

export default TaskForm