import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const TaskForm = ({ onSubmit }) => {
    const [taskName, setTaskName] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const submitForm = (e) => {

        e.preventDefault()

        if (!taskName) {
            alert('Enter task name')
            return
        }
        if (!detail) {
            alert('Enter task detail')
            return
        }
        if (!dueDate) {
            alert('Enter task due date')
            return
        }

        console.log("Selected category is : " , category)


        onSubmit(taskName, detail, dueDate)

        // setShowAddedTask(true)

        setTaskName('')
        setDetail('')
        setDueDate('')

    }

    const customTheme = (theme) => {
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25: 'orange',
                primary: '#3D6868',
            },
        };
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

                <Select
                    theme={customTheme}
                    options={options}
                    isClearable
                    isSearchable
                    autoFocus
                    onChange={setCategory}
                    classNamePrefix={'Select category'} 
                    className='select'/>

                <input className='submit-btn' type='Submit' value={'Submit Task'} />
            </form>
        </div>
    )
}

export default TaskForm