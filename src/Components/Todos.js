import React from 'react'
import Todo from "./Todo";
import AddTodo from './AddTodo';
export default function Todos({ addTodo, item, onDelete,setTodos }) {

    return (

        <div className = "App1 container my-3 " style = {{minHeight:"75vh",maxHeight:"80vh"}}>
        <div className="row " >


            <div className="container text-white col text-center">
                <div className = "row">
                    <div className = "col"><h2><b>Todo items</b></h2></div>
                    {item.length !== 0?
                    <div className = "col"><button onClick = {()=>{setTodos([])}} className = "btn btn-danger btn-sm" >Clear All</button></div>
                    :""}
                </div>
                {item.length === 0 ? "Add Todo items to display them."
                    :
                    item.map(items => (
                        <ul key = {items.key}>
                            <Todo items={items} onDelete={onDelete} />
                        </ul>
                    ))}

            </div>


        


            <div className="container  col  border-top py-5" >
                <AddTodo todos={item} addTodo={addTodo} />
            </div>

        </div>
        </div>
    );
}
