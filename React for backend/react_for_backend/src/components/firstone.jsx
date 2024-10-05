
import React from "react";

export const Checking1 = () => {
    const fun = ()=>{
        axios.get("")
    }

    return (
        <>
            <div style={{ width: '350px', display: 'flex', flexDirection: 'column' }}>
                <input type="text" />
                <input type="password" />
                <button onClick={fun}>Log In</button>
            </div>
        </>
    )
}