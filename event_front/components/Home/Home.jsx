import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
const Home = () => {
    const navigate = useNavigate();
  return (
    <>    
    <Button variant="contained" onClick={()=>{navigate('/add')}}>Add Event</Button>
    <Button variant="contained" onClick={()=>{navigate('/update')}}>Update Event</Button>
    <Button variant="contained" onClick={()=>{navigate('/delete')}}>Delete Event</Button>
    <Button variant="contained" onClick={()=>{navigate('/view/organizer')}}>View By Organizer</Button>
    </>

  )
}

export default Home