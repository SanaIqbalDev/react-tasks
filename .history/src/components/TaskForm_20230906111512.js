import React, { useState } from 'react'
import Select from 'react-select'

const TaskForm = ({ onSubmit }) => {
    const [taskName, setTaskName] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')

    const dateToday = new Date()
    const month = dateToday.month + 1
    // const day = dateToday.Date
    // const year = dateToday.year

    console.log("Date is " , dateToday)
    console.log("month is " , dateToday.month)
    // console.log(`${day} - ${month} - ${year}`)
    


    const options = [
        { value: 'official', label: 'Official' },
        { value: 'household', label: 'Household' },
        { value: 'personal', label: 'Personal' }
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
        if (!category) {
            alert('Select suitable category for task')
            return
        }

        onSubmit(taskName, detail, dueDate, category.value)

        setTaskName('')
        setDetail('')
        setDueDate('')
        setCategory('')

    }

    const customTheme = (theme) => {
        return {
            ...theme,
            colors: {
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
                    <input className='input-text' type='text' required placeholder='Add task name' value={taskName} onChange={(e) => { setTaskName(e.target.value) }} />
                </div>

                <div className='input-section'>
                    <label>Detail</label>
                    <input className='input-text' type='text' required placeholder='Add task detail' value={detail} onChange={(e) => { setDetail(e.target.value) }} />
                </div>

                <div className='input-section'>
                    <label>Due Date</label>
                    {/* {console.log(Date())} */}
                    <input className='input-text' type='date' required min={'2023-09-26'} placeholder='Add task due date' value={dueDate} onChange={(e) => { setDueDate(e.target.value) }} />
                </div>

                <Select
                    theme={customTheme}
                    options={options}
                    isClearable
                    isSearchable
                    autoFocus
                    required
                    value={category}
                    onChange={setCategory}
                    placeholder={'Select category'}
                    className='select' />

                <input className='submit-btn' type='Submit' value={'Submit Task'} readOnly/>
            </form>
        </div>
    )
}

export default TaskForm