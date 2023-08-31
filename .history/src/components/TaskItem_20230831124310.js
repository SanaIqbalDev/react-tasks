import React from 'react'

const TaskItem = (props) => {

    const { name, detail, duedate } = props.taskInfo

    return (
        <div className='task-container'>
            <label>name</label>
            <label>detail</label>
            <label>duedate</label>
        </div>
    )
}

export default TaskItem