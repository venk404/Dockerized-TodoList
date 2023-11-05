import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Todo = ({task, deletetodo , markcomplted}) => {
   
    
    return (
        <>	
        <div className='Todo'>
        <p className='first' style={{textDecoration: task.isCompleted ? 'black line-through' : 'none'}}>{task.task}</p>
            <div>
                <FontAwesomeIcon  className="edit-icon"  icon={faCheck} onClick={() => markcomplted(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deletetodo(task.id)}/>
             </div>
        </div>
    </> );
}
 
export default Todo;