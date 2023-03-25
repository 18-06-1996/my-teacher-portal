import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BaseApp } from "../core/BaseApp";


export function EditTeacher({mentor,setMentor}){

    const history=useHistory();
    const [idx,setIdx] = useState('');
    const [name, setName] = useState('');
    const [batch,setBatch] = useState('');
    const [email,setEmail] = useState('');
    const [experience,setExperience] = useState('');

    const{id}=useParams();
    const selectuser =mentor.find((per)=>per.id==id);

    useEffect(()=>{
        setIdx(selectuser.id);
        setName(selectuser.name);
        setBatch(selectuser.batch)
        setEmail(selectuser.email);
        setExperience(selectuser.experience);
    },[]);

const UpdateMentor=()=>{
    const editIndexs= mentor.findIndex((per)=>per.id ==id);
console.log(editIndexs);

        const editDatas={
            id:idx,
            name,
            batch,
            email,
            experience
        }
      mentor[editIndexs]=editDatas;
        setMentor([...mentor])
        history.push("/teacher");

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
              onClick={UpdateMentor}
                className="add-btn">Update</button>



        </div>
        </BaseApp>
 )
}