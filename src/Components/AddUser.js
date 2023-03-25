import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseApp } from "../core/BaseApp";


export function AddUser({user, setUser}){

const history = useHistory();

const [id,setId] = useState('');
const [name, setName] = useState('');
const [batch,setBatch] = useState('');
const [email,setEmail] = useState('');
const [experience,setExperience] = useState('');

const addNewUser=()=>{

    const newUser={
        id,
        name,
        batch,
        email,
        experience
    }
    console.log(newUser)
    setUser([...user, newUser])
    history.push("/");
}

    return(
        <BaseApp
        title =" A New User ">
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
                    onClick={addNewUser}
                    className="add-btn">Add</button>



            </div>
            </BaseApp>

    )
}