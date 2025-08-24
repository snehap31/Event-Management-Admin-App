import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const UpdateEvent = () => {
    const navigate = useNavigate();
    const[form,setform]=useState({
        "eventID": 0,
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
        axios.put("http://localhost:8081/update",form).then(
            (res)=>{
                if(res.data)
                {
                    alert("Updated Sucessfullly")
                    navigate("/home")
                }
                else
                {
                    alert("Could'nt Update")
                    setform({
    "eventID":0,
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
        <h1>Update</h1>
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

export default UpdateEvent