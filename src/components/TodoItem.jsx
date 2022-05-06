import "./TodoItem.css"
const TodoItem=({todo , handlestatus})=>{
    return <div className="list"> <input className="checkbox" type="checkbox" onChange={()=>{ }} />{todo.title} - {todo.status ? "Done":"Not Done"} <button className="btnclass" onClick={()=>handlestatus(todo.id)}>toggle</button> 
     </div>
}
export{TodoItem}