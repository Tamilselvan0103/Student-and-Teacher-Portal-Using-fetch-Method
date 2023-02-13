import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "./Base";

const StudentProfile = ({ studentdata, setStudentdata }) => {
  const { id } = useParams();
  const student = studentdata[id];
  const history = useHistory();
  return (
    <Base>
      <Box className="HomeBox">
        <Box>
          <Typography variant="h3" component="h2">
            Profile of {student.name}
          </Typography>
        </Box>

        <Box className="CardBox">
          <Card sx={{ maxWidth: 345 }} key={id} className="studentCards">
            <CardMedia
              sx={{ height: 140 }}
              image={student.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {student.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch : {student.batch}
                <br />
                Gender : {student.gender}
                <br />
                Age : {student.age}
                <br />
                Blood Group : {student.bloodGroup}
              </Typography>
            </CardContent>
            <CardActions>
              <Box className="profileButton">
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() => history.push(`/edit-profile/${id}`)}
                >
                  Edit
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Base>
  );
};

export default StudentProfile;
