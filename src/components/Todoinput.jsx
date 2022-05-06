import { useState } from "react"
import "./Todoinput.css"

const Todoinput=({data})=>{

const [text, setText]=useState("") //state

    return(
        <div className="main">
            <button className="addbtn" onClick={()=>{
                data(text)
            }}>+</button>
            <input 
            onChange={(e)=>{
                setText(e.target.value)
                
            }} type="text"  placeholder="Write something" className="inputclass"/>
            
             
        </div>
    )


}

export {Todoinput}