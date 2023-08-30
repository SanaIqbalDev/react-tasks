import React, { useState } from 'react'

const TaskForm = () => {
    const [taskName, setTaskName] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('')

  return (
    <div>
        <h2>ADD TASK</h2>
        <form >
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

            <button type='Submit' value={'Submit Task'} ></button>
        </form>
    </div>
  )
}

export default TaskForm