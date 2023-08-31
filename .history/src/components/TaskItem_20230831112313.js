import React from 'react'

const TaskItem = ({taskInfo}) => {

    console.log(taskInfo)

    return (
        <div className='task-container'>
            {/* <label>{taskInfo}</label> */}
            <label>{taskInfo[1]}</label>
            {/* <label>{taskInfo[2]}</label> */}
        </div>
    )
}

export default TaskItem