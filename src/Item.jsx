export default function Item({ completed, id, title, toggleTodo, deleteTodo }) {

    return (
        <li style={{ listStyle: 'none' }}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                {title}
                <button
                    className="btn btn-danger"
                    onClick={(e) => deleteTodo(id, e.target.checked)}
                    disabled={completed !== true}
                >
                    Delete
                </button>
            </label>
        </li>
    )

}