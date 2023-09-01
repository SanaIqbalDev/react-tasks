import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
    return (
        <DataView>
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList