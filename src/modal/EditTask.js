import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask=({modal,toggle,editTask,taskobj})=>{


  const [taskName,SetTaskName]=useState('')
  const[desc,Setdesc]=useState('')
  const[datetime,Setdatetime]=useState('')


useEffect(()=>{
SetTaskName(taskobj.name)
Setdesc(taskobj.desc)
Setdatetime(taskobj.datetime)
},[])


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
  
const handleEdit=(e)=>{

    e.preventDefault()
    let tempobj={}
    tempobj['name']=taskName
    tempobj['desc']=desc
    tempobj['datetime']=datetime
    editTask(tempobj)
}


    return(
        <>

<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Update TODo</ModalHeader>
<ModalBody>
  
<form>

<div className='form-group'>
  <label>TaskName</label>
  <input type="text" value={taskName} onChange={handleChange} name="taskName" className="form-control" />
</div>


<div className='form-group'>
  <label>Description</label>
  <textarea value={desc} name="desc" onChange={handleChange} className="form-control"></textarea>
</div>

<div className='form-group'>
  <label>Time</label>
  <input type="datetime-local" value={datetime} onChange={handleChange} name="datetime" className="form-control" />

  
</div>

</form>





</ModalBody>
<ModalFooter>
  <Button color="primary" onClick={handleEdit}  >Update</Button>
  
</ModalFooter>
</Modal>
        </>
    )
}
export default EditTask