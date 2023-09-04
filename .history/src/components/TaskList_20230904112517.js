import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {

    const [taskList, setTaskList] = useState([...tasks])

    // const [filteredtasks, setFilteredtasks] = useState(props.tasks)

    const [selectedCat, setSelectedCategory] = useState('all')

    const CategoryClicked = (value) => {

        setSelectedCategory(value)
        
        console.log("All tasks are: " , tasks)
        console.log(value)

        const newTaskList =  tasks.map(task => (task.category === value))

        console.log("Filtered tasks are: " , newTaskList)

        // setFilteredtasks(newTaskList)


    }
    // useEffect = () => {
    //     setTaskList([...tasks])
    // }
    return (
        <div className='task-list'>
            <hr></hr>
            <div className='category-heading'>
                <label className={(selectedCat === 'all') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('all') }}>All</label>
                <label className={(selectedCat === 'official') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('official') }}>Official</label>
                <label className={(selectedCat === 'household') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('household') }}>Household</label>
                <label className={(selectedCat === 'personal') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('personal') }}>Personal</label>
            </div>
            {console.log("Tasks before mapping : ", taskList)}
            {tasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList