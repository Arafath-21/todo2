import React,{useState} from 'react'
// import Hom from './components/Hom'
// import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Todo from './components/Todo'
import Add from './components/Add'

function App() {

  let [todo,setTodo] = useState([
    {
      id:1,
      taskName: 'Eat',
      desc: 'this is the description for My first Task',
      status:false
    },
    {
      id:2,
      taskName: 'Sleep',
      desc: 'this is the description for My second Task',
      status:false
    },
    {
      id:3,
      taskName: 'Code',
      desc: 'this is the description for My third Task',
      status:false
    },
  ])

  return <>

  <Add setTodo={setTodo}/>
  <Todo todo={todo} setTodo={setTodo} />

  </>
}

export default App