import React, { useState } from 'react'
import './App.css'
 const App = () => {
  let Employe=['veda','Vikram','Ravi','teja'];
  const [todos,setTodos]=useState([
    
  ]);
  const [formdata,setFormdata]=useState({
    title:"",
    description:""
  })
  const handleformInput=(e)=>{
   
   
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }
  const handlekey=(e)=>{
    if(e.keyCode==13){
      //update todos
setTodos([
  {...formdata,status:'Pending'},
  ...todos
])
      
      console.log('form submitted');
      //reset form
      setFormdata({
            title:"",
    description:""
      })
    }
    
  }
  
  console.log(formdata,todos);
const handleTodoChange=e=>{
  let updatedTodos=[...todos];
  updatedTodos[e.target.id].status=e.target.checked?"DONE":"PENDING";
setTodos(updatedTodos);
}
  return ( <div> 
    {Employe.map((emp,idx1)=>(
      <div key={idx1}><ul><li>{emp}</li></ul></div>
    ))}
      {
      todos.map((todo,idx)=>{
     return(
      <div key={idx} className='todolist'>
        <input type='checkbox' id={idx} onChange={handleTodoChange}></input>
        <div style={todo.status=="DONE"?{textDecoration:'line-through'}:null}>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </div>
      </div>
     )
      })
    }
    <form>
      <div>
        <input type='text' name="title" placeholder='title' value={formdata.title} onChange={handleformInput} onKeyDown={handlekey} required/><br></br>
        <input type='text' name="description" placeholder='description' value={formdata.description} onChange={handleformInput} onKeyDown={handlekey} required/>
      </div>
    </form>

    </div>
  )
}
export default App;
