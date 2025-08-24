import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const AddEvent = () => {
    const navigate = useNavigate();
    const[form,setform]=useState({
        "eventName": '',
  "organizerType": '',
  "eventType": '',
  "startDate": '',
  "endDate": '',
  "venue": '',
  "speakerName": '',
  "capacity": 0,
  "status": '',
  "remarks": ''
    })
    let updateValue =(e)=>
    {
        setform({...form,[e.target.name]:e.target.value})
    }
    let print =()=>{
        axios.post("http://localhost:8081/add",form).then(
            (res)=>{
                if(res.data)
                {
                    alert("Added Sucessfullly")
                    navigate("/home")
                }
                else
                {
                    alert("Could'nt add")
                    setform({
                        "eventName": '',
  "organizerType": '',
  "eventType": '',
  "startDate": '',
  "endDate": '',
  "venue": '',
  "speakerName": '',
  "capacity": 0,
  "status": '',
  "remarks": ''
                    })
                }
            }
        ).catch((err)=>{console.log(err)})
    }
  return (
    <>
    <center>
        <h1>Add</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
       
        <TextField id="filled-basic" 
        required
        label="EventName"
        name='eventName'
        value={form.eventName}
        onChange={updateValue} 
        variant="filled" /> 
        <br></br>
        <TextField id="filled-basic" 
        label="organizerType" 
        name='organizerType'
        value={form.organizerType}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <TextField id="filled-basic" 
        label="eventType" 
        name='eventType'
        value={form.eventType}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <TextField id="filled-basic" 
        type='date'
        label="startDate" 
        name='startDate'
        value={form.startDate}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <TextField id="filled-basic" 
        type='date'
        label="endDate" 
        name='endDate'
        value={form.endDate}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <TextField id="filled-basic" 
        label="venue" 
        name='venue'
        value={form.venue}
        onChange={updateValue}
        variant="filled" />
        <br></br><TextField id="filled-basic" 
        label="speakerName" 
        name='speakerName'
        value={form.speakerName}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <TextField id="filled-basic" 
        label="capacity" 
        name='capacity'
        value={form.capacity}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <TextField id="filled-basic" 
        label="status" 
        name='status'
        value={form.status}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <TextField id="filled-basic" 
        label="remarks" 
        name='remarks'
        value={form.remarks}
        onChange={updateValue}
        variant="filled" />
        <br></br>
        <Button variant="contained" onClick={print}>Submit</Button>
    </Box>
    </center>
    </>
  )
}

export default AddEvent