import React,{useState} from 'react'

function Add({setTodo}) {
    let [task,setTask] = useState("")
    let [description,setDesc] = useState("")
    let addTodo=()=>{
        setTodo((current)=>{
            let id = current[current.length-1].id?++current[current.length-1]:0
            let newArray=[...current]
            newArray.push({
                id,taskName:task,desc:description,status:true
            })
            return newArray
        })
        setTask("")
        setDesc("")
    }
  return <>
  <div className="container py-5">
    <div className="row">
            <h1 className='text-center py-5'> My Todo</h1>
            <div className="col-lg-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Todo Task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            </div>            
            </div>
            <div className="col-lg-4">
                <input type="text" className="form-control" placeholder="Todo Description" value={description} onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            <div className="col-lg-4">
                <button className="btn btn-success btn-add" type="button" onClick={()=>addTodo()}>Add To Do</button>
            </div> 
    </div>
  </div>
  </>
}

export default Add