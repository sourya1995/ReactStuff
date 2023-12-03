import React from 'react'

const ToDoList = (props) => {
    return (
        <>
            <ul className="appToDoHolder">
                {(props.item).map((item) => {
                    return (
                        <div className='appToDo' key={item.id}>
                            <li>{item.toDo}</li>
                            <button className='appDelete' title='delete' onClick={() => props.onDelete(item.id)}>Delete</button>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

export default ToDoList;