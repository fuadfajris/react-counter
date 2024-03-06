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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank list!");
      return;
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }];

    setTodos(addedTodos);
    setValue("");
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count > 0) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos)
  }

  const getTotalCount = () => {
    //reduce: 
    const totalCount = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCount;
  }

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="nav-icon" />
        <h1 className="nav-title"> Shopping</h1>
      </nav>

      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
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

        <div className="info">
            <div className="info-total">
              <p>{`Total List: ${todos.length}`}</p>
            </div>

            <div className="info-total">
              <p>{`Total Count: ${getTotalCount()}`}</p>
            </div>

            <button onClick={() => setTodos([])} className="delete-all-button">Delete All List</button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button onClick={() => handleSubstractionCount(index)} className="todo-action-button">
                      <img src={minusIcon} alt="minus icon" />
                    </button>
                    <button onClick={() => handleAdditionCount(index)} className="todo-action-button">
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
