import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate();
    const[form,setform]=useState({
        email:'',
        password:''
    })
    let updateValue = (e)=>
    {
        setform({...form,[e.target.name]:e.target.value})
    }
    let print =()=>
    {
        axios.post("http://localhost:8081/login",form).then((res)=>{
            if(res.data.token)
            {
                localStorage.setItem("token",res.data.token);
                alert("Login successful");
                navigate("/home")
            }
            else
            {
                alert("Login Failed");
                setform({
                    email:'',
                    password:''})
            }
        }
        ).catch((err)=>{console.log(err)})
    }
  return (
    <>
    <center>
        <h1>Login</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField id="filled-basic" 
        required
        type='email'
        label="Email"
        name='email'
        value={form.email}
        onChange={updateValue} 
        variant="filled" /> 
        <br></br>
        <TextField id="filled-basic" 
        required
        type='password'
        label="Password" 
        name='password'
        value={form.password}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <Button variant="contained" onClick={print}>Submit</Button>
    </Box>
    </center>
    </>
  )
}

export default Login