import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {

    const tasks = props.tasks
    const [selectedCat, setSelectedCategory] = useState('all')

    return (
        <div className='task-list'>
            <hr></hr>
            <div className='category-heading'>
                <label className={(selectedCat === 'all') ? 'selected-category' : 'category'}>All</label>
                <label className={(selectedCat === 'official') ? 'selected-category' : 'category'}>Official</label>
                <label className={(selectedCat === 'household') ? 'selected-category' : 'category'}>Household</label>
                <label className={(selectedCat === 'personal') ? 'selected-category' : 'category'}>Personal</label>
            </div>
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList