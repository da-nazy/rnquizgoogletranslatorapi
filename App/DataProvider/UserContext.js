import React,{useState,createContext} from 'react';

export const UserContext=createContext();

export default UserProvider=props=>{
    const[user,setUser]=useState({
    name:null,
    matric:null,
    dog:null,
    });
    return(
        <UserContext.Provider value={{
            user,setUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}