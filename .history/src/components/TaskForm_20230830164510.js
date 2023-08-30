import React, { useState } from 'react'

const TaskForm = () => {
    const [taskName, setTaskName] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('')

  return (
    <div>
        <form>
            <div className='input-section'>
                <label>Enter task name:</label>
                <input type='text' placeholder='Add task name' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <div className='input-section'>
                <label>Enter task name:</label>
                <input type='text' placeholder='Add task name' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>

            <div className='input-section'>
                <label>Enter task name:</label>
                <input type='text' placeholder='Add task name' value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
            </div>
        </form>
    </div>
  )
}

export default TaskForm