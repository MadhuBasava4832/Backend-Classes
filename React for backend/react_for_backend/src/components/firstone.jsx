
import React, { useState } from "react";
import axios from "axios";


export const Checking1 = () => {

    const [logindata,setlogindata]=useState({
        username:"",
        password:""
    })



    const handlechange=(e)=>{
        const {name,value} = e.target;
        setlogindata(pre=>({...pre,[name]:value}))
        console.log(logindata)


    }

    const func = () => {
        axios.post("http://localhost:9000/modifyDetails",logindata)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
            
        })

    }
    return (
        <>
            <div style={{ width: '350px', display: 'flex', flexDirection: 'column' }}>
                <input type="text" name="username"  onChange={handlechange}/>
                <input type="password" name="password" onChange={handlechange}/>
                <button onClick={func}>Log In</button>
            </div>


        </>
    )
}