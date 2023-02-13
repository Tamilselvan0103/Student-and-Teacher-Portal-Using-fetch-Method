import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import  { useState } from "react";
  import { useHistory, useParams } from "react-router-dom";
import Base from '../Component/Base';


const TeacherProfile = ({TeacherData,setTeacherdata}) => {
    const { id } = useParams();
    const Teacher = TeacherData[id];
    const history = useHistory();
    
  return (

    <Base>
      <Box className="HomeBox">
        <Box>
          <Typography variant="h3" component="h2">
            Profile of {Teacher.name}
          </Typography>
        </Box>

        <Box className="CardBox">
          <Card sx={{ maxWidth: 345 }} key={id} className="studentCards">
            <CardMedia
              sx={{ height: 140 }}
              image={Teacher.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Teacher.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch : {Teacher.subject}
                <br />
                Gender : {Teacher.gender}
                <br />
                Age : {Teacher.experience}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Box className="profileButton">
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() => history.push(`/edit-teacher-user/${id}`)}
                >
                  Edit
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Base>
  )
}

export default TeacherProfile