import { FINISH_TODO,ADD_TODO,DELETE_TODO,Edit_TODO } from "../Constants/actions"

export const todoFinished=(todo,isFinished)=>({type:FINISH_TODO,payload:{todo,isFinished}})
export const addTodo=(todoText)=>({type:ADD_TODO,payload:{todoText:todoText}})
export const deleteTodo=(todo)=>({type:DELETE_TODO,payload:{todo}})
export const editTodo=(todo,todoText)=>({type:Edit_TODO,payload:{todo,todoText}})