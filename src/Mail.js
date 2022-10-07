import React, { useState } from 'react'

export const Mail = ()  =>{
    const [values, setValues] = useState({
        "userEmail": "",
        "message": "",
        status: false,
    })

    const {userEmail, message, status} = values;
    const handleChange = event => {
        setValues({ ...values, [name]: event.target.value });

    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("values email: " , userEmail);
        console.log(" values message: " , message);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}> 
        <label> Enter Email</label>

        </form>
    </div>
  )
}
