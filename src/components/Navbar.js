import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = (props) => {
  return (
    // navbar component
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => props.handleClick(false)}>
            ALBUMS LIST
          </Typography>
          <Button component={Link} to={props.path} variant="contained" color="info" sx={{ background: "#0095ff" }}>
            {props.page}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
