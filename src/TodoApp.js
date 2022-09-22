import { useState } from "react";
import TodoItem from "./TodoItem";
import InputValue from "./inputValue";

const TodoAppBase = [
  { id: 1, name: "Jog around the park ss3x", completed: true },
  { id: 2, name: "Jog around the park 4x", completed: false },
  { id: 3, name: "Jog around the park 5x", completed: true },
  { id: 4, name: "Jog around the park 6x", completed: true },
];
const TodoApp = () => {
  const [todocurrbase, setnewBase] = useState(TodoAppBase);

  function clickHandler(item) {
    const newArray = todocurrbase.map((todoitem) => {
      if (item.id === todoitem.id) {
        todoitem.completed = !todoitem.completed;
        console.log(item.id);
        return todoitem;
      } else {
        return todoitem;
      }
    });
    console.log(newArray);
    setnewBase(newArray);
  }

  return (
    <>
      <h1>hello</h1>
      <ul>
        {todocurrbase.map((item) => {
          return (
            <TodoItem
              key={item.id}
              value={item.name}
              completed={item.completed}
              id={item.id}
              onclick={() => clickHandler(item)}
            />
          );
        })}
      </ul>
    </>
  );
};

export { TodoApp, TodoAppBase };
