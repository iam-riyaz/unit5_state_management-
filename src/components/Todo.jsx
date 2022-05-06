import { useState } from "react"
import { Todoinput } from "./Todoinput"
import { TodoItem } from "./TodoItem"
import {nanoid} from "nanoid"
import {Complete} from "./Complete"

function Todo()
{

    const [todolist, setTodolist]= useState([])
    const getData=(value)=>{
        const forstatus={
            title:value,
            status:false,
            id:nanoid(3)
        }
       setTodolist([...todolist, forstatus])
    }

    const handlestatus=(id)=>{
        console.log("id",id)
        setTodolist(
            todolist.map((e)=>(e.id==id ? {...e,status:!e.status}: e))
        )
    }
    return (
        <div>
        <Todoinput data={getData} />
        {todolist.map((e)=>(
              <TodoItem handlestatus={handlestatus} todo={e}/>)
        )}
        <div>
            <Complete />
        </div>
        
        </div>
    )
}

export{Todo}