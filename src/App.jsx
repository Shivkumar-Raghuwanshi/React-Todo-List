import React, { useState } from "react";
import './App.css'

export default function App() {

  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })

  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }


  return (
    <>

      <div className="App">

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="item">Add New Item</label>
            <input
              type="text"
              id="item"
              name="item"
              placeholder="Please input item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit" disabled={newItem.length === 0}>Add</button>
          </form>
          <h2>To Do List</h2>
          <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map((todo) => {
              return (
                <li key={todo.id} style={{ listStyle: 'none' }}>
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    {todo.title}
                    <button
                      className="btn btn-danger"
                      onClick={(e) => deleteTodo(todo.id, e.target.checked)}
                      disabled={todo.completed !== true}
                    >
                      Delete
                    </button>
                  </label>
                </li>
              )
            })}

          </ul>

        </div>

      </div>

    </>

  )
}