import React from "react";
import { useParams } from "react-router-dom";
import { BaseApp } from "../core/BaseApp";


export function UserDetails({user}){
   
    const{id} = useParams();
    const person = user[id];


    return(
        <BaseApp 
               title={"user information"}>

          <div className='user-content-view'> 
     
             <div className='user-card'>
                <h1>  {person.name}</h1>
                <p>Batch : {person.batch}</p>
                <p>Email : {person.email}</p>
                <p> Exp :{person.experience}</p>
            
            </div>
      
          </div>
        </BaseApp>
    )
}