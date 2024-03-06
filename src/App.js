import { useState } from "react";
import shoppingIcon from "./assets/shopping-icon.svg";
import plusIcon from "./assets/plus-icon.svg"
import minusIcon from "./assets/minus-icon.svg";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {title: "Susu", count: 1},
    {title: "Tahu", count: 1},
    {title: "Apel", count: 1},
  ]);

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="nav-icon" />
        <h1 className="nav-title"> Shopping</h1>
      </nav>

      <section className="container">
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="List"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <button className="add-button">Add</button>
        </form>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button className="todo-action-button">
                      <img src={minusIcon} alt="minus icon" />
                    </button>
                    <button className="todo-action-button">
                      <img src={plusIcon} alt="plus icon" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div>List Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;