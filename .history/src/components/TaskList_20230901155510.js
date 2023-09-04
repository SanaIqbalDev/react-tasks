import React from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {

    const tasks = props.tasks
    return (
        <div className='task-list'>
            <div className='category-heading'>
                <label className='selected-category'>All</label>
                <label className='category'>Official</label>
                <label className='category'>Household</label>
                <label className='category'>Personal</label>
            </div>
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList