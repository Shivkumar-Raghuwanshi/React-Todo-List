import React from "react"
import Item from "./Item"

export default function List({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map((todo) => {
                return (
                    <Item 
                    {...todo} 
                    key={todo.id} 
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
                )
            })}

        </ul>
    )
}