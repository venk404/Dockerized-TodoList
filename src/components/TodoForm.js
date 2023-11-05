import {React, useRef } from 'react';



const TodoForm = ({addtodo}) => {
    const task = useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        addtodo(task.current.value);
        task.current.value = null;
    }

    return ( 
        <>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='What is task today' ref={task} required/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
        </>
    );
}
 
export default TodoForm;