import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const ViewOrganizer = () => {
    const navigate = useNavigate();
    const[form,setform]=useState({
  "organizerType": '',
    })
    const[event,setevent]=useState([]);
    let updateValue =(e)=>
    {
        setform({...form,[e.target.name]:e.target.value})
    }
    let print =()=>{
        axios.get(`http://localhost:8081/view/${form.organizerType}`).then(
            (res)=>{
                if(res.data)
                {
                    setevent(res.data)
                }
                else
                {
                    alert("Could'nt View")
                }
            }
        ).catch((err)=>{console.log(err)})
    }
  return (
    <>
    <center>
        <h1>View By Organizer</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
       <TextField id="filled-basic" 
               label="organizerType" 
               name='organizerType'
               value={form.organizerType}
               onChange={updateValue}
               variant="filled" />
        <br></br>
        <Button variant="contained" onClick={print}>Submit</Button>
    </Box>
    </center>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>eventID</TableCell>
            <TableCell align="right">eventName</TableCell>
            <TableCell align="right">organizerType</TableCell>
            <TableCell align="right">eventType</TableCell>
            <TableCell align="right">startDate</TableCell>
            <TableCell align="right">endDate</TableCell>
            <TableCell align="right">venue</TableCell>
            <TableCell align="right">speakerName</TableCell>
            <TableCell align="right">capacity</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {event.map((row) => (
            <TableRow
              key={row.eventID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.eventName}
              </TableCell>
              <TableCell align="right">{row.organizerType}</TableCell>
              <TableCell align="right">{row.eventType}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
                <TableCell align="right">{row.venue}</TableCell>
                <TableCell align="right">{row.speakerName}</TableCell>
                <TableCell align="right">{row.capacity}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default ViewOrganizer