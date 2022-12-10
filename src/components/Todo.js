import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todos, completeTodo, updateTodo, removeTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} placeHolder={edit.value} value={edit.value} buttonName={'Atualizar'}/>
    }

    return todos.map((todo, index) => (
        <div className={'row fw-bold ' + (todo.isComplete ? 'todo-row-complete' : 'todo-row')} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className='col'>
                {todo.text}
            </div>
            <div className='icons col'>
                <RiCloseCircleLine onClick={() => { removeTodo(todo.id) }} className='delete-icon m-3' />
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon m-3' />
            </div>
        </div>
    ))
}

export default Todo