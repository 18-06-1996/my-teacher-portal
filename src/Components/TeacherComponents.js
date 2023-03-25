import React from "react";
import { useHistory } from "react-router-dom";
import { BaseApp } from "../core/BaseApp";



export function TeacherComponent({mentor,setMentor}){

    const history= useHistory();

    const DeleteMentor=(idx)=>{

    const alteredlist = mentor.filter((per,id)=> per.id !== idx)
        setMentor(alteredlist);
    }

    return(
         <BaseApp 
         title={"teacher details"}>
         
<div className="user-content">
{
    mentor &&(
        mentor?.map((persons,idx)=>(
            <div key={idx} className="user-card">
                     <h1>{persons.name}</h1>
                     <p> Batch : {persons.batch}</p>
                    <p>Email : {persons.email}</p>
                    <p>Exp : {persons.experience}</p>
           
                    <div className="btn-group">
    <button
    onClick={()=>history.push(`/editer/${persons.id}`)}
    className="edit-btn"> Edit</button>
    <button 
    onClick={()=>history.push(`teachers/${idx}`)}
     className="view-btn"> view</button>
    <button
    onClick={()=>DeleteMentor(persons.id)}
    className="del-btn"> delete</button>

</div>
           
           
           
           
           
            </div>
        )
        )
    )
}
</div>

         </BaseApp>
    )
}


    