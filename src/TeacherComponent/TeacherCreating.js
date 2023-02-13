import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import Base from "../Component/Base";

const TeacherCreating = ({setTeacherdata,TeacherData}) => {
    const [name, setName] = useState("");
    const [img, setimg] = useState("");
    const [gender, setgender] = useState("");
    const [experience, setexperience] = useState("");
    const [subject, setsubject] = useState("");
    
    const history = useHistory();
    const addTeacher= async()=> {

try {

  const newTeacher = {
    name,
    img,
    experience,
    subject,
    gender
  };
const response= await fetch("https://63ae5bbdceaabafcf1782371.mockapi.io/Teacher",{
  method:"POST",
  body:JSON.stringify(newTeacher),
  headers:{
    "Content-Type":"application/json"
  }
})
const data = await response.json()




  setTeacherdata([...TeacherData, data]);
  setName("");
  setimg("");
  setgender("");
  setexperience("");
  setsubject("");
  history.push("/teacher-user");

} catch (error) {
  
  console.log(error)
}
       
      }
  return (
    <Base>    
    <Box className="Createstudentfield">
        <Box className="studenttitle">
          <Typography variant="h2" component="h6">
            Create a New Teacher
          </Typography>
        </Box>
        <Box className="textfield">
          <TextField
            className="InputText"
            helperText="Please enter your Name"
            id="demo-helper-text-aligned"
            onChange={(event) => setName(event.target.value)}
            value={name}
            label="Name"
          />
          <TextField
            className="InputText"
            helperText="Please enter your Batch"
            id="demo-helper-text-aligned"
            onChange={(event) => setsubject(event.target.value)}
            value={subject}
            label="Subject"
          />
          <TextField
            className="InputText"
            helperText="Please enter your Age"
            id="demo-helper-text-aligned"
            onChange={(event) => setexperience(event.target.value)}
            value={experience}
            label="Experience"
          />
          <TextField
            className="InputText"
            helperText="Mention Gender"
            id="demo-helper-text-aligned"
            onChange={(event) => setgender(event.target.value)}
            value={gender}
            label="Gender"
          />
          <TextField
            className="InputText"
            helperText="Attach your Image"
            id="demo-helper-text-aligned"
            onChange={(event) => setimg(event.target.value)}
            value={img}
            label="Image"
          />
          <br />
          <Box>
            <Button
              size="small"
              color="primary"
              onClick={addTeacher}
              variant="contained"
            >
              Add Teacher
            </Button>
          </Box>
        </Box>
      </Box>
    </Base>

  )
}

export default TeacherCreating