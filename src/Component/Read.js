import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Base from "./Base";

export function Read({ studentdata, setStudentdata }) {
  const deleteStudentdata=async(id)=> {
  
    try {
      const response = await fetch(`https://63ae5bbdceaabafcf1782371.mockapi.io/student/${id}`,{
        method:"DELETE",
        headers:{
          "content-type": "application/json"
        }
      })
      const data = await response.json();
      console.log(data);
      let remaingdata = studentdata.filter((data, idx) => idx !== id);
      setStudentdata(remaingdata);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  const history = useHistory();

  return (
    <Base>
      <Box className="HomeBox">
        <Box>
          <Typography variant="h2" component="h6"></Typography>
        </Box>

        <Box className="CardBox">
          {studentdata.map((data, idx) => (
            <Card sx={{ maxWidth: 345 }} key={idx} className="studentCards">
              <CardMedia
                sx={{ height: 140 }}
                image={data.img}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Batch : {data.batch}
                  <br />
                  Gender : {data.gender}
                  <br />
                  Age : {data.age}
                  <br />
                  Blood Group : {data.bloodGroup}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() => history.push(`/edit-user/${idx}`)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  onClick={() => {
                    deleteStudentdata(idx);
                  }}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={() => history.push(`/profile/${idx}`)}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Base>
  );
}


