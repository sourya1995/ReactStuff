import React, { useState } from 'react'
import ToDoList from '../ToDoList/ToDoList';

const getLocalItems = () => {
    let items = localStorage.getItem("TASK");
    if(items) {
        return JSON.parse(items);
    } else {
        return [];
    }
}

function Input() {

    const [inputData, setInputData] = useState("");
    const [todoList, setToDoList] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(inputData.trim().length <= 0) return;
        setInputData(' ');
        setToDoList((prevValue) => [
            ...prevValue,
            {toDo: inputData, id: nanoid()}
        ]);
    }

    const onChangeHandler = (event) => {
        setInputData(event.target.value);
    }

    const onDeleteHandler = (itemID) => {
        setToDoList((oldValues) => 
            oldValues.filter((item) => {
                return item.id !== itemID;
            })
        );
    }
  return (
    <>
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder='add task' className='appInput' onChange={onChangeHandler}/>
        </form>
        <ToDoList item={todoList} onDelete={onDeleteHandler} />
    </>
  )
}

export default Input