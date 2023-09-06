import React, { useState } from 'react'
import Select from 'react-select'

const TaskForm = ({ onSubmit }) => {
    const [taskName, setTaskName] = useState('')
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')

    const dateToday = new Date().toLocaleDateString("en", { year: "numeric", month: "numeric", day: "numeric" })

    const newDate = new Date(dateToday)

    const newduedate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1).toString().padStart(2, '0') + '-' + newDate.getDate().toString().padStart(2, '0');


    const categoryOptions = [
        { value: 'official', label: 'Official' },
        { value: 'household', label: 'Household' },
        { value: 'personal', label: 'Personal' }
    ]

    const priorityOptions = [
        { value: 'critical', label: 'Critical' },
        { value: 'high', label: 'High' },
        { value: 'normal', label: 'Normal' },
        { value: 'low', label: 'Low' }
    ]

    const submitForm = (e) => {

        e.preventDefault()

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
                    <input className='input-text' type='date' min={newduedate} data-date-format="DD MM YYYY" required placeholder='Add task due date' value={dueDate} onChange={(e) => { setDueDate(e.target.value) }} />
                </div>

                <div className='input-section' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                        <label>Category</label>
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
                    </div>
                    <div>
                        <label>Priority</label>
                        <Select theme={customTheme}
                            options={options}
                            isClearable
                            isSearchable
                            autoFocus
                            required
                            value={category}
                            onChange={setCategory}
                            placeholder={'Select category'}
                            className='select' />
                    </div>
                </div>
                <input className='submit-btn' type='Submit' value={'Submit Task'} readOnly />
            </form>
        </div>
    )
}

export default TaskForm