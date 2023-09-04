import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {

    var [tasks, setTasks] = useState(props.tasks)

    const [selectedCat, setSelectedCategory] = useState('all')

    const CategoryClicked = (value) => {

        setSelectedCategory(value)

        setTasks([tasks.filter(task => (task.category === selectedCat))])

        console.log(tasks)

    }
    return (
        <div className='task-list'>
            <hr></hr>
            <div className='category-heading'>
                <label className={(selectedCat === 'all') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('all') }}>All</label>
                <label className={(selectedCat === 'official') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('official') }}>Official</label>
                <label className={(selectedCat === 'household') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('household') }}>Household</label>
                <label className={(selectedCat === 'personal') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('personal') }}>Personal</label>
            </div>
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList