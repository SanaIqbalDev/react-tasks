import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {

    const [taskList, setTaskList] = useState([])

    const [filteredtasks, setFilteredtasks] = useState([])

    const [selectedCat, setSelectedCategory] = useState('all')

    const CategoryClicked = (value) => {

        setSelectedCategory(value)
    }

    useEffect(() => {
        setTaskList([...tasks]);
        setSelectedCategory('all');

    }, [tasks]); //whenever tasks property value changes , it will execute code inside useEffect function...


    useEffect(() => {
        setFilteredtasks([...taskList]);
    },[taskList])


    useEffect(() => {

        console.log("Selected Category is: ", selectedCat);

        const newTaskList = taskList.map(task => ((task.category === selectedCat) && console.log(task.category)));


        setFilteredtasks([...filteredtasks, newTaskList]);

    }, [selectedCat]);


    return (
        <div className='task-list'>
            <hr></hr>
            <div className='category-heading'>
                <label className={(selectedCat === 'all') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('all') }}>All</label>
                <label className={(selectedCat === 'official') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('official') }}>Official</label>
                <label className={(selectedCat === 'household') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('household') }}>Household</label>
                <label className={(selectedCat === 'personal') ? 'selected-category' : 'category'} onClick={() => { CategoryClicked('personal') }}>Personal</label>
            </div>
            {filteredtasks.map((task) => (<TaskItem task={task} />))}
        </div>
    )
}

export default TaskList