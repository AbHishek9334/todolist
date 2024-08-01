 
import { useState } from 'react'
import './App.css'
 
import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import { useDispatch } from 'react-redux'
import todoReducer,{addTodo,editTodo,deleteTodo,todoFinished} from "./slices/todoSlice"
import { bindActionCreators } from 'redux'
 
 
function App() {
  // const [list,setList]=useState([
  //   {id:1,todoData:"todo1",finished:false},
  //   {id:2,todoData:"todo2",finished:false}
  
  // ])
  const dispatch=useDispatch()
  const actions=bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch)
   
   
 
  

  return (
    
      
          <>
            <AddTodo addTodo={actions.addTodo}/>
            <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
          
          </>
       
    
  )
}

export default App
