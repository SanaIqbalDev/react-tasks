import React from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {

    const tasks = props.tasks
    return (
        <div className='task-list'>
            <div className='category-heading'>
                <label className='selected'>All</label>
                <label>Official</label>
                <label>Household</label>
                <label>Personal</label>
            </div>
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList