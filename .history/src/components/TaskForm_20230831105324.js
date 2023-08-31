import React, { useState } from 'react'

const TaskForm = ({onSubmit}) => {
    const [taskName, setTaskName] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('')


    const submitForm = (e) => {

        e.preventDefault()

        if(!taskName){
            alert('Enter task name')
            return
        }
        if(!detail){
            alert('Enter task detail')
            return
        }
        if(!dueDate){
            alert('Enter task due date')
            return
        }
        
        onSubmit({true})

        // setShowAddedTask(true)

        setTaskName('')
        setDetail('')
        setDueDate('')

    }
    return (
        <div>
            <h2 className='heading'>ADD TASK</h2>
            <form className='add-task-form' onSubmit={submitForm}>
                <div className='input-section'>
                    <label>Name</label>
                    <input className='input-text' type='text' placeholder='Add task name' value={taskName} onChange={(e) => { setTaskName(e.target.value) }} />
                </div>

                <div className='input-section'>
                    <label>Detail</label>
                    <input className='input-text' type='text' placeholder='Add task detail' value={detail} onChange={(e) => { setDetail(e.target.value) }} />
                </div>

                <div className='input-section'>
                    <label>Due Date</label>
                    <input className='input-text' type='text' placeholder='Add task due date' value={dueDate} onChange={(e) => { setDueDate(e.target.value) }} />
                </div>

                <input className='submit-btn' type='Submit' value={'Submit Task'} />
            </form>            
        </div>
    )
}

export default TaskForm