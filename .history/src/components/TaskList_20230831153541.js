import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => { <TaskItem task={task} /> })}
        </div>
    )
}

export default TaskList