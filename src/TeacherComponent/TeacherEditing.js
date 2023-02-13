import React, { useEffect } from 'react'
import Base from '../Component/Base'
import { Button, TextField, Typography } from "@mui/material";
import  { useState } from "react";
import { Box } from "@mui/system";
import { useHistory, useParams } from "react-router-dom";

const TeacherEditing = ({TeacherData,setTeacherdata}) => {
    const { id } = useParams();
    const [idx, setIdx]= useState(id)
    const [name, setName] = useState("");
    const [img, setimg] = useState("");
    const [gender, setgender] = useState("");
    const [experience, setexperience] = useState("");
    const [subject, setsubject] = useState("");
    const history = useHistory();
    const Teacher = TeacherData[id];
    
    useEffect(() => {
        setName(Teacher.name);
        setsubject(Teacher.subject);
        setexperience(Teacher.experience);
        setimg(Teacher.img);
        setgender(Teacher.gender);
       
      }, []);
    
      const UpdateTeacherdata=async()=> {

        try {
          const newTeacher = {
            name,
            img,
            experience,
            subject,
            gender
        };
          const response = await fetch(`https://63ae5bbdceaabafcf1782371.mockapi.io/Teacher/${idx}`,{
            method:"PUT",
            body:JSON.stringify(newTeacher),
            headers:{
              "Content-Type":"application/json"
            }
          });
          const data = await response.json();

        TeacherData[id] = newTeacher;
        setName("");
        setsubject("");
        setimg("");
        setgender("");
        setexperience("");
        history.push("/teacher-user");
        } catch (error) {
          console.log(error);
        }
       
      }
  return (
    <Base>    
    <Box className="Createstudentfield">
        <Box className="studenttitle">
          <Typography variant="h2" component="h6">
            Edit Teacher profile
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
              onClick={UpdateTeacherdata}
              variant="contained"
            >
              Edit Teacher
            </Button>
          </Box>
        </Box>
      </Box>
    </Base>
  )
}

export default TeacherEditing