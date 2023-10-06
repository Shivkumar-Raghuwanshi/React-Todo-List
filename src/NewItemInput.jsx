import React, { useState } from "react";


const InputItem = ({onSubmit}) => {

    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem === "") return

        onSubmit(newItem);

        setNewItem("");
    }

    return (

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


    )
}

export default InputItem;