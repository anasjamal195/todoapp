import React from 'react'

export default function About() {
    return (
        <div className = "container text-white">
            <div className = "container border-top my-3 py-3 mx-auto text-center">
                <h2><b>About this application</b></h2>
                    <div className = "container p-2" style ={{fontSize:"150%",backgroundColor:"rgba(0,0,0,0)",borderRadius:"5%",width:"50vh"}}>
                       <p>
                        This is a simple React application made using basic React Router and React Hooks.<br/>
                        <b>Developer: </b> Anas Jamal
                        </p>
                        <hr/>
                        <p><i>Hosted using github</i></p>
                    </div>
            </div>
        </div>
    )
}
