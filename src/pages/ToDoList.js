import {useState} from 'react'

const ToDoList = () => {

    const [item, setItem] = useState()

    function createItem(e){
        e.preventDefault();
        const todo_list = document.getElementById('todo-list');
        const todo_item = document.createElement('div');
        const todo_check = document.createElement("INPUT");
        todo_check.setAttribute("type", "checkbox");
        todo_check.classList.add('todo-check');
        todo_item.classList.add('todo-item');
        todo_item.innerHTML =  item
        todo_list.appendChild(todo_item)
        todo_item.prepend(todo_check)
        document.getElementById('input').value='';

    }

    return(
            <div className="main">
            <h1 className="title">To Do List</h1>
            <div className="todo-header">
            <span><input type="text" className="add-input" id="input" placeholder="Text Here" onChange={(e) => setItem(e.target.value)}></input><button className="add-btn" onClick={createItem}>Add</button></span>
            </div>
                <div className="todo-box">
                    <div className="todo-list" id='todo-list'>
                   </div>
                </div>
            </div>
    )
}

export default ToDoList