import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Todo = () => {
    const defaultInput = {id: "", text: "", status: ""};
    const [items, setItems] = useState([
        {id: 1, text: "Weekly Meeting", status: "Pending"},
        {id: 2, text: "Monthly Meeting", status: "Completed"},
        {id: 3, text: "Weekly Meeting", status: "Pending"},
    ]);
    const [noticeMsg, setNoticeMsg] = useState('');
    const [todoInput, setTodoInput] = useState( defaultInput );
    const [editTodoInput, setEditTodoInput] = useState( defaultInput );
    const [index, setIndex] = useState( '' );

    const addTodo = (e) => {
        e.preventDefault();
        const oldItems = [...items];
        oldItems.push(todoInput);
        setItems(oldItems);
        setTodoInput(defaultInput);
        setNoticeMsg('New todo added!');
        setTimeout( () => {
            setNoticeMsg('');
        }, 3000 );
    }

    const deleteTodo = (e) => {
        const prevItems = [...items];
        prevItems.splice(e, 1);
        setItems(prevItems);        
        setNoticeMsg('Todo deleted!');
        setTimeout( () => {
            setNoticeMsg('');
        }, 3000 );
    }

    const editTodo = (e) => {
        const prevItems = [...items];
        setEditTodoInput(prevItems[e]);
        setIndex(e);
        const modal = document.getElementById('editmodalbox');
        modal.style.display='block';
    }

    const updateTodo = () => {
        const prevItems = [...items];
        prevItems[index] = editTodoInput;
        setItems(prevItems);
        setEditTodoInput(defaultInput);
        setIndex('');
        const modal = document.getElementById('editmodalbox');
        modal.style.display='none';
        setNoticeMsg('Todo updated!');
        setTimeout( () => {
            setNoticeMsg('');
        }, 3000 );
    }

    const inputHandle = (e) => {
        setTodoInput({...todoInput, [e.target.name] : e.target.value});
    }
    const editInputHandle = (e) => {
        setEditTodoInput({...editTodoInput, [e.target.name] : e.target.value});
    }
    const hideModal = (e) => {
        const modal = document.getElementById('editmodalbox');
        modal.style.display='none';
        setEditTodoInput(defaultInput);
    }

    return (
        <>
            <h1>Todo List</h1>
            {
                (noticeMsg !== '') ? <><div className="noticemsg">{noticeMsg}</div></> : ''
            }

            <AddTodo addTodo={addTodo} inputHandle={inputHandle} input={todoInput} />

            {
                items.map( (item, index) => {
                    return <TodoList key={item.id} index={index} edit={editTodo} delete={deleteTodo} item={item} />
                } )
            }

            <div id="editmodalbox" className="modal-box">
                <div className="modal-content">
                    <div className="add-todo">
                        <h3>Edit Todo</h3>
                        <input type="hidden" id="editIndex" name="index" value={index} />
                        <input type="text" name="text" value={editTodoInput.text} placeholder="Todo Name" onChange={editInputHandle} />
                        <select name="status" value={editTodoInput.status} id="" onChange={editInputHandle}>
                            <option value="">Status</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                        <button className="btn-success" onClick={updateTodo}>Update</button>
                        <button type="cancel" className="btn-cancel" onClick={hideModal}>Cancel</button>
                        
                    </div>
                </div>
            </div>

        </>
    );

}
export default Todo;