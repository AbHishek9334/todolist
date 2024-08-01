import { useContext, useState } from "react"

import { useDispatch } from "react-redux"
import { addTodo } from "../../actions/todoAction"


function AddTodo({addTodo}){
    const [inputText,setInputText]=useState("")
     
    const dispatch=useDispatch()
    return (
        <div>
            <input type="text" value={inputText} placeholder="add your next todo" onChange={(e)=>setInputText(e.target.value)}/>
            <button onClick={()=>{addTodo(inputText);
                                setInputText("");
            }}>Add</button>

        </div>
    )

}
export default AddTodo