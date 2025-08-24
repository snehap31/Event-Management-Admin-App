import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const DeleteEvent = () => {
    const navigate = useNavigate();
        const[form,setform]=useState({
            "eventID": 0,
        })
        let updateValue =(e)=>
    {
        setform({...form,[e.target.name]:e.target.value})
    }
    let print =()=>{
        axios.delete(`http://localhost:8081/delete/${form.eventID}`,form).then(
            (res)=>{
                if(res.data)
                {
                    alert("Deleted Sucessfullly")
                    navigate("/home")
                }
                else
                {
                    alert("Could'nt Delete")
                    setform({
    "eventID":0,
                    })
                }
            }
        ).catch((err)=>{console.log(err)})
    }
  return (
    <>
    <center>
        <h1>Delete</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
       <TextField id="filled-basic" 
        required
        label="EventID"
        name='eventID'
        value={form.eventID}
        onChange={updateValue} 
        variant="filled" /> 
        <br></br>
        <Button variant="contained" onClick={print}>Submit</Button>
    </Box>
    </center>
    </>
  )
}

export default DeleteEvent