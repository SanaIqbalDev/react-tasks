import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {

    const tasks = props.tasks
    const [selectedCat, setSelectedCategory] = useState('all')

    const CategoryClicked = (value) => {

        setSelectedCategory(value)
    }
    return (
        <div className='task-list'>
            <hr></hr>
            <div className='category-heading'>
                <label className={(selectedCat === 'all') ? 'selected-category' : 'category'} onClick={setSelectedCategory('all')}>All</label>
                <label className={(selectedCat === 'official') ? 'selected-category' : 'category'} onClick={setSelectedCategory('official')}>Official</label>
                <label className={(selectedCat === 'household') ? 'selected-category' : 'category'} onClick={setSelectedCategory('household')}>Household</label>
                <label className={(selectedCat === 'personal') ? 'selected-category' : 'category'}  onClick={setSelectedCategory('personal')}>Personal</label>
            </div>
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList