import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import { Button, Card, CardActions, CardContent, Grid, Tooltip, Typography } from "@mui/material";

const AddAlbumCard = (props) => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");

  // function to get the data from the add album form
  const setAlbumData = (e, name) => {
    // If the name is "userId", update the state with the userId value
    if (name === "userId") {
      setUserId(e.target.value);
    }
    // If the name is "title", update the state with the title value
    if (name === "title") {
      setTitle(e.target.value);
    }
    // If the name is not passed in, it means the "Add To List" button was clicked and the addAlbumToList function should be called with the userId and title values
    if (!name) {
      props.addAlbumToList(
        Number(userId),
        title
      ); /* This line of code is passing the userId and title values as parameters to a parent function, which will then use those values to add a new album to the list. */
    }
  };

  return (
    <div>
      <Navbar path="/" page="Home" />
      <Card
        /* Styling for the Card component */
        sx={{
          maxWidth: 490,
          height: "100%",
          margin: "6em auto auto auto",
          padding: "0.8em",
        }}
      >
        <Typography
          style={{
            fontFamily: "Cherry Swash",
            fontSize: "1.6rem",
            fontWeight: 900,
            textAlign: "center",
          }}
          className="paragraph"
          color="text.secondary"
        >
          Enter New Album Details
        </Typography>
        <CardContent>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={8}>
              {/* TextField component for user input of userId  */}
              <TextField
                id="userId"
                type="number"
                label="Enter User Id :"
                multiline
                maxRows={2}
                fullWidth
                size="small"
                value={userId}
                onChange={(e) => setAlbumData(e, "userId")}
              />
            </Grid>
            <Grid item xs={8}>
              {/* TextField component for user input of title  */}
              <TextField
                id="title"
                type="number"
                label="Enter Album Title :"
                multiline
                maxRows={2}
                fullWidth
                size="small"
                value={title}
                onChange={(e) => setAlbumData(e, "title")}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Tooltip
            title={
              /* if data is not present then add tooltip message */
              title.length <= 0 || userId.length <= 0 ? "add data to field to enable" : ""
            }
            arrow
          >
            <span>
              <Button
                component={Link}
                to="/"
                size="small"
                variant="contained"
                onClick={setAlbumData}
                disabled={title.length <= 0 || userId.length <= 0} /* if data is not present then disable this button */
              >
                Add To List
              </Button>
            </span>
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
};

export default AddAlbumCard;
