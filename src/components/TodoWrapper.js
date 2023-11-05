import React from 'react';
import TodoForm from './TodoForm';
import { useState } from 'react';
import Clock from './Clock';
import Todo from './Todo';
import {v4 as uuidv4 } from 'uuid';



const TodoWrapper = (props) => {
    const [todos, settodos] = useState([]);
    const addtodo = todo =>{
        settodos([...todos, {id:uuidv4() ,task: todo,isCompleted:false,IsEdit:false,Isdel:false}]);
    }

    const deletetodo = id => {
        settodos(todos.filter(todos => todos.id !== id));
    }

    const markcomplted = id => {
        const updatedFilteredTodos = () => todos.map(todo => {
            if (todo.id === id) {
              // This is the item you want to update
              return { ...todo, isCompleted: true}; // Update the 'task' property to 'User'
            } else {
              // This is not the item you want to update, so return it as is
              return todo;
            }
          });
          settodos(updatedFilteredTodos);
    }

    return ( 
        <div className='TodoWrapper'> 
        <h1>Venky's Task</h1>
            <Clock/>
            <TodoForm addtodo = {addtodo}/>
            {todos.map((todo, index) => (
                 <Todo task={todo} key={index}  deletetodo={deletetodo} markcomplted = {markcomplted} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}/>
            ))}
   
        </div>
    );
}
 
export default TodoWrapper;