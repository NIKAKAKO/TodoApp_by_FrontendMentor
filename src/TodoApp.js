import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoAppBase=[
    {id:1,
    name:"Jog around the park 3x",
    completed:true,},
    {id:2,
    name:"Jog around the park 4x",
    completed:false,},
    {id:3,
    name:"Jog around the park 5x",
    completed:true,},
    {id:4,
    name:"Jog around the park 6x",
    completed:true,}

];


const TodoApp=()=>{ 
    const [todocurrbase, setnewBase]=useState (TodoAppBase);
    function clickHandler(item) {
   

       const newValues= TodoAppBase.map(todoitem => {
            if (item.id===todoitem.id) {
                console.log(item.id)
                item.completed=!item.completed;
                }
     
            

            
    })
    return  setnewBase(newValues);
   
    }
    

return (


TodoAppBase.map(item  =>( 
    <ul>
    <TodoItem key={item.id} value={item.name} completed={item.completed} id={item.id} onclick={()=>clickHandler(item)}/>
    </ul>
        )
    
    
        )

)}

export  {TodoApp, TodoAppBase};