import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "./Base";

export function Home(props) {
  const history = useHistory();

  return (
    <Base>
      <Box className="StudentHomePortal">
        <Container>
          <Typography variant="h2" gutterBottom className="head12">
            Welcome to Student and Teacher Portal
            <Typography variant="h2" gutterBottom className="head12">
              This Site is completely Created for the Student and Teacher Portal Using React
              Curd Method
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h1"
              className="head12"
            >
              User Can Read, Create, Edit, Delete a Student Profile
            </Typography>
            <Box className="btnhome">
              <Button
                variant="contained"
                onClick={() => history.push("/users")}
                color="secondary"
              >
                Student Portal
              </Button>
            </Box>
          </Typography>
        </Container>
      </Box>
    </Base>
  );
}
