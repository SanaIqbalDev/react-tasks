import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {
  return (
    {tasks.map((task) => {<TaskItem/>})}
  )
}

export default TaskList