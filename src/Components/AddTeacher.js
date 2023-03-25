import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/AppProvider";
import { BaseApp } from "../core/BaseApp";


export function AddTeacher(){
    const {mentor,setMentor} = AppState();
    const history=useHistory();

        const [id,setId] = useState('');
        const [name, setName] = useState('');
        const [batch,setBatch] = useState('');
        const [email,setEmail] = useState('');
        const [experience,setExperience] = useState('');

const addNewTeacher=()=>{

    const newTeacher={
        id,
        name,
        batch,
        email,
        experience
    }
    console.log(newTeacher);
    setMentor([...mentor, newTeacher])
    history.push("/teacher")
}

    return(
        <BaseApp
        title={"A New Teacher"}>
            <div className="input-group">
            <input
                    placeholder="id"
                    value={id}
                    onChange={(event)=>setId(event.target.value)}
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
                    onClick={addNewTeacher}
                    className="add-btn">Add</button>


            </div>
        </BaseApp>
    )
}