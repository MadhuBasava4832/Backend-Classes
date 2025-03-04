import React, { useState } from "react";
import axios from "axios";


export const Checking1 = () => {

    const [logindata, setlogindata] = useState({
        username: "",
        password: ""
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setlogindata(pre => ({ ...pre, [name]: value }))
        // console.log(logindata)
    }

    const func = () => {
        axios.post("http://localhost:9000/modifyDetails", logindata)
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
                <input type="text" name="username" placeholder="Enter username" onChange={handlechange} />
                <input type="password" name="password" placeholder="Enter password" onChange={handlechange} />
                <button onClick={func}>Sign Up</button>
            </div>


        </>
    )
}


export const FileUpload = () => {
    const upload = () => { 
        var file = document.getElementsByTagName("input")[0].files[0];
        // FormData for file upload 
        const formData = new FormData();
        formData.append("anyname", file);
    
        // axios.post("http://localhost:9000/FileUpload", formData, {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   })

        
        axios.post("http://localhost:9000/FileUpload",formData)
          .then((result) => {
            console.log("File uploaded successfully");
          })
          .catch((err) => {
            console.log("File upload error:", err);
          });
      };

    return (
        <>
            <div>
                <input  type="file"/> <br /><br />
                <button onClick={upload} >Upload to Backend</button>
            </div>
        </>
    )
}