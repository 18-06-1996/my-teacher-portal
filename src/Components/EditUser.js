import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BaseApp } from "../core/BaseApp";



export function EditUser({user,setUser}){

    const history=useHistory();
    const [idx,setIdx] = useState('');
    const [name, setName] = useState('');
    const [batch,setBatch] = useState('');
    const [email,setEmail] = useState('');
    const [experience,setExperience] = useState('');

    const{id} =useParams();
    const selecteduser =user.find((per)=>per.id ===id);

    useEffect(()=>{
        setIdx(selecteduser.id);
        setName(selecteduser.name);
        setBatch(selecteduser.batch)
        setEmail(selecteduser.email);
        setExperience(selecteduser.experience);
    },[]);




    const UpdateUser=()=>{
const editIndex= user.findIndex((per)=>per.id ===id);
console.log(editIndex);

        const editData={
            id:idx,
            name,
            batch,
            email,
            experience
        }
      user[editIndex]=editData;
        setUser([...user])
        history.push("/");
    }


    return(
        <BaseApp
        title =" Update A User Details ">
            <div className="input-group-edit">

                    <input
                    placeholder="id"
                    value={id}
                    onChange={(event)=>setIdx(event.target.value)}
                    />

                    
                    <input
                    placeholder="name"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    />

                    
                    <input
                    placeholder="batch"
                    value={batch}
                    onChange={(event)=>setBatch(event.target.value)}
                    />

                    
                    <input
                    placeholder="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    />

                    
                    <input
                    placeholder="experience"
                    value={experience}
                    onChange={(event)=>setExperience(event.target.value)}
                    />

                    <button
                  onClick={UpdateUser}
                    className="add-btn">Update</button>



            </div>
            </BaseApp>
    )
}