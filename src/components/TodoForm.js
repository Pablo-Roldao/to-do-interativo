import React, { useState, useEffect, useRef } from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    return (
        <form className='todo-form row' onSubmit={handleSubmit}>
            <input type='text' placeholder={props.placeHolder} value={input} name='text' className='todo-input rounded form-control m-3 col border border-dark' onChange={handleChange} ref={inputRef}/>
            <button className='todo-button btn btn-sm m-3 col-2 fw-bold border border-dark'>{props.buttonName}</button>
        </form>
    )
}

export default TodoForm