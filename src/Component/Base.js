import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

export function Base({ children }) {
  const history = useHistory();
  const [show, setShow] = useState(false);

  function clicked() {
    setShow(!show);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="Base">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={clicked}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
              onClick={() => history.push("/")}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  cursor: "pointer",
                  marginLeft: "2rem",
                },
              }}
              onClick={() => history.push("/create-user")}
            >
              Create a New Student
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  cursor: "pointer",
                  marginLeft: "2rem",
                },
              }}
              onClick={() => history.push("/create-teacher")}
            >
              Create a New Teacher
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  cursor: "pointer",
                  marginLeft: "2rem",
                },
              }}
              onClick={() => history.push("/teacher-user")}
            >
             Teacher Portal
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  cursor: "pointer",
                  marginLeft: "2rem",
                },
              }}
              onClick={() => history.push("/users")}
            >
              Student Portal
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {show ? (
        <Box className="titleheader">
          <Button onClick={() => history.push("/")}>Home</Button>
          <Button onClick={() => history.push("/create-user")}>
            Create a New Student
          </Button>
          <Button onClick={() => history.push("/users")}>Student Portal</Button>
        </Box>
      ) : (
        ""
      )}
      <Box className="Box">
        <Box className="Child">
          <div className="childerns">{children}</div>
        </Box>
      </Box>
    </>
  );
}

export default Base;
