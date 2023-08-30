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
                <label>Name</label>
                <input type='text' placeholder='Add task name' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <div className='input-section'>
                <label>Detail</label>
                <input type='text' placeholder='Add task detail' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <div className='input-section'>
                <label>Due Date</label>
                <input type='text' placeholder='Add task due date' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <input className='submit-btn' type='Submit' value={'Submit Task'} />
        </form>
    </div>
  )
}

export default TaskForm