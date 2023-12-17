import React,{useState} from 'react';

function Card({ todo, setTodo }) {
  // const handleDelete = (id) => {
  //   setTodo((prevTodo) => {
  //     return prevTodo.filter((item) => item.id !== id);
  //   });
  // };
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(todo.taskName);
  const [editedDesc, setEditedDesc] = useState(todo.desc);
  const handleDelete = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.id !== todo.id);
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === todo.id
          ? { ...item, taskName: editedTaskName, desc: editedDesc }
          : item
      )
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the edited values to the original values
    setEditedTaskName(todo.taskName);
    setEditedDesc(todo.desc);
  };

  return (
    <div className="col-lg-4 d-flex py-5 text-center">
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body">
        {isEditing ? (
              <>
                <label htmlFor="" className='h5' >Task Name :</label>
                <input type="text" value={editedTaskName} onChange={(e) => setEditedTaskName(e.target.value)}/>
                <label htmlFor="" className='h5'>Task Description :</label>
                <input type="text" value={editedDesc} onChange={(e) => setEditedDesc(e.target.value)} />
                <div className='d-flex gap-2 justify-content-center'>
                    <button className="btn btn-success" onClick={handleSave}>Save</button>
                    <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                </div>
              </>
            ) : (<>
          <h5 className="card-title">Task-{todo.taskName}</h5>
          <p className="card-text">
            <span className="h5">Description:</span> {todo.desc}
          </p>
          <div>
            <label className="h6">Status:</label>
            <select>
              <option>Not Completed</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="d-flex justify-content-center gap-1">
            <button className="btn btn-success" onClick={handleEdit}>Edit</button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div></>)}
        </div>
      </div>
    </div>
  );
}

export default Card;
