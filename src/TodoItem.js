



const TodoItem=({value, completed, id, onclick})=>{ 

    return (
        <label id={id} >
        <li className={completed ? "completed" : ''} >
           <input type="checkbox" onChange={onclick} checked={completed}></input>
           {value}
        </li></label>
)}


export default TodoItem