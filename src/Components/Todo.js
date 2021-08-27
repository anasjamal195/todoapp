import React from 'react'

export default function Todo({ items, onDelete }) {
    let styleDiv = {
       
        boxShadow:"15px 10px 30px -10px rgb(0,0,0) "
    };
    return (
        
        <div style = {styleDiv}>
            <div className="card " style ={{backgroundColor:"rgba(255,255,255,0.7)",color:"black",backdropFilter: "blur(5px)"}}>
                <h5 className="card-header">{items.Title}</h5>
                <div className="card-body">
                    <p className="card-text">{items.Desc}</p>
                    <button  className="btn btn-danger btn-sm" onClick={() => { onDelete(items) }}>Delete</button>
                </div>
            </div>
        </div>
    );
}
