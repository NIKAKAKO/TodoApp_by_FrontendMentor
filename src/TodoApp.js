import { useState } from "react";
import TodoItem from "./TodoItem";
import InputValue from "./InputValue";
import Submit from "./SubmitItem";

const TodoAppBase = [
  { id: 1, name: "Jog around the park ss3x", completed: true },
  { id: 2, name: "Jog around the park 4x", completed: false },
  { id: 3, name: "Jog around the park 5x", completed: true },
  { id: 4, name: "Jog around the park 6x", completed: true },
];
const TodoApp = () => {
  const [currentState, setCurrentState] = useState(TodoAppBase);
  const [value, setValue] = useState("");

  function clickHandler(item) {
    const newArray = currentState.map((todoitem) => {
      if (item.id === todoitem.id) {
        todoitem.completed = !todoitem.completed;
        return todoitem;
      } else {
        return todoitem;
      }
    });
    setCurrentState(newArray);
  }

  function submitText() {
    if (value === "") {
      return value;
    } else {
      const SubmitedItem = {
        id: currentState.length + 1,
        name: value,
        completed: false,
      };
      const SubmitedBase = [SubmitedItem, ...currentState];

      setCurrentState(SubmitedBase);
      setValue("");
      console.log(value);
    }
  }

  return (
    <>
      <form>
        <InputValue
          value={value}
          type="text"
          placeholder="anything"
          onchange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Submit type="button" value="submit" onclick={() => submitText()} />
      </form>
      <ul>
        {currentState.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: 300,
                border: "1px solid black",
                marginTop: 10,
              }}
            >
              <TodoItem
                key={item.id}
                value={item.name}
                completed={item.completed}
                id={item.id}
                onclick={() => clickHandler(item)}
              />
              <button>X</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export { TodoApp, TodoAppBase };
