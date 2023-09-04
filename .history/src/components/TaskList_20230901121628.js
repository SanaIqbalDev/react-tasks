import React from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {

    const tasks = props.tasks
    return (
        <div>
            <div className='category-heading'></div>
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList