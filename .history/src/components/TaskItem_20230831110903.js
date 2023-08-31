import React from 'react'

const TaskItem = ({name,detail,duedate}) => {

    console.log(name,detail,duedate)
    
    return (
        <div className='task-container'>
            <label>{name}</label>
            <label>{detail}</label>
            <label>{duedate}</label>
        </div>
    )
}

export default TaskItem