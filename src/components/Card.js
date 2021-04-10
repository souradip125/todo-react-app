import React,{useState} from 'react'
import EditTask from '../modal/EditTask'

const Card=({taskobj,index,deleteTask,updateListArray})=>{



const handleDelete=()=>{

deleteTask(index)

}
const editTask=(obj)=>{

    updateListArray(obj,index)
}

   
const [modal,Setmodal]=useState(false)

const toggle=()=>{
Setmodal(modal)
}




    let colors=[
        {
        background:"whitesmoke"
        },{
        background:"aliceblue"},{background:'#29f1c3'},{background:'#86e2d5'},{background:'#36d7b7'},
        {background:'#22a7f0'},{background:'#c5eff7'},{background:'#f0ff00'},{background:'#ffff7e'},
        {background:'#ffffcc'},{background:'#e8ecf1'},{background:'#e4e9ed'},{background:'#eeeeee'}
        
        ]
    return (
        <>


<div className="container" style={colors[index%colors.length]}>
    <span>{taskobj.name}</span> <span>{taskobj.desc}</span> <span>{taskobj.datetime}</span>
   <span> <button className="edit" onClick={()=>Setmodal(true)}>Edit</button>
    <button className="delete" onClick={handleDelete}>Delete</button></span>
</div>


<EditTask modal={modal} toggle={toggle} editTask={editTask} taskobj={taskobj} />


        </>
    )
}
export default Card