import React from 'react';
import { useState } from 'react';
export default function AddTodo({ todos, addTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        addTodo(todos, title, desc);
        setTitle("");
        setDesc("");


    }

    return (

      <div className = "container">
            <div>
            <h2>Add a Todo item</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control bg-transparent" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Enter Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control bg-transparent    " id="desc" />
                </div>

                <button type="submit" className="btn btn-success">Add</button>
            </form>
            </div>
        </div>
    )
}
