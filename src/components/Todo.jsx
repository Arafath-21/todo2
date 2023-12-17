import React from 'react'
import Card from './Card'

function Todo({todo,setTodo}) {
  return <>
           <div className="container">            
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-between pt-5">
                        <div>
                            <h2 className=''>My Todo's</h2>
                        </div>
                        <div>
                            <label className='h2'>Status Filter:</label>
                            <select className='filter'>
                                <option>All</option>
                                <option className='not-complete'>Not Completed</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>
                </div>               
                <div className="row">
                    {
                        todo.map((todo)=>{
                            return <Card key={todo.id} todo={todo} setTodo={setTodo} />
                        })
                    }
                </div>
            </div>    
  </>
}

export default Todo