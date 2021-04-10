import React,{useEffect, useState} from 'react'

import Createtask from '../modal/Createtask'
import Card from './Card'
const TodoList=()=>{

    const [modal,Setmodal]=useState(false)

    const [tasklist,Settasklist]=useState([])

    

    useEffect(()=>{
        let a=localStorage.getItem('tasklist')
        
        if(a)
        {
        let obj=JSON.parse(a)
        Settasklist(obj)
        }
    },[])


    const Savetask=(taskobj)=>{
       
        tasklist.push(taskobj)

        localStorage.setItem('tasklist',JSON.stringify(tasklist))


        Settasklist(tasklist)
        Setmodal(false)
    }


    const deleteTask=(index)=>{
       
        tasklist.splice(index,1)
        
        localStorage.setItem('tasklist',JSON.stringify(tasklist))
        Settasklist(tasklist)
        window.location.reload()
    }

    

    const updateListArray=(obj,index)=>{
    
        let templist=tasklist
        templist[index]=obj
        localStorage.setItem('tasklist',JSON.stringify(templist))
        Settasklist(templist)

        window.location.reload()

    }



    const toggle=()=>{
        Setmodal(modal)
    }




    return (
<>
<div>
    <h1 className='title'>TodoList</h1>
  <center> <button className="createtask" onClick={()=>Setmodal(true)}>Create a Task</button></center> 
</div>




{ tasklist.map((obj,index)=>

<Card taskobj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />

)}




<Createtask modal={modal} toggle={toggle} save={Savetask} />



</>
    )

}
export default TodoList