import React, { useState } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Createtask=({modal,toggle,save})=>{


  const [taskName,SetTaskName]=useState('')
  const[desc,Setdesc]=useState('')
  const[datetime,Setdatetime]=useState('')


  const handleChange=(e)=>{

    /*const name=e.target.value
    const value*/
const {name,value}=e.target
if(name==='taskName')
{
  SetTaskName(value)
}
if(name==='desc')
{
  Setdesc(value)
}
if(name==='datetime')
{
  Setdatetime(value)
}


  }


  //
  const handlesave=()=>{
    SetTaskName('')
    Setdesc('')
    let taskobj={}
    taskobj['name']=taskName
    taskobj['desc']=desc
    taskobj['datetime']=datetime
    save(taskobj)
  }


    return(
        <>

<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Create TODO</ModalHeader>
<ModalBody>
  
<form>

<div className='form-group'>
  <label>UserName</label>
  <input type="text"  value={taskName} onChange={handleChange} name="taskName" className="form-control" required />
</div>


<div className='form-group'>
  <label>Todo Name</label>
  <textarea value={desc} name="desc" onChange={handleChange} className="form-control" required></textarea>
</div>

<div className='form-group'>
  <label>Todo Time</label>
  <input type="datetime-local" value={datetime} onChange={handleChange} name="datetime" className="form-control" required/>

  
</div>

</form>





</ModalBody>
<ModalFooter>
  <Button color="primary" onClick={handlesave}  >Create</Button>
  
</ModalFooter>
</Modal>
        </>
    )
}
export default Createtask