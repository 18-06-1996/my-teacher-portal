import React, { children, createContext, useContext, useState } from "react";
import { data } from "../Data/Data";
import { dataTeacher } from "../Data/DataTeacher";


const AppContext =createContext();

export const AppProvider =({children})=>{

    const [user,setUser] = useState(data);
    const [mentor, setMentor] = useState(dataTeacher);
    return(
        <AppContext.Provider
        value={{
            user,
            setUser,
            mentor,
            setMentor
        }}
        >

            {children}
        </AppContext.Provider>

    )
}

export const AppState=()=>{
    return useContext(AppContext)
}