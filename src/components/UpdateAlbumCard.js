import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Button, Card, CardActions, CardContent, Grid, TextField, Tooltip, Typography } from "@mui/material";

const UpdateAlbumCard = (props) => {
  const [title, setTitle] = useState(props.album.title); /* Initialize state for the title with the title value passed in as a prop */
  const [userId, setUserId] = useState(props.album.userId); /* Initialize state for the userId with the userId value passed in as a prop */

  const getUpdateData = (e, name) => {
    const id = props.album.id; /* Get the id of the album from props */
    if (name === "title") {
      setTitle(e.target.value); /* Update the title state with the new value */
    }
    if (name === "id") {
      setUserId(e.target.value); /* Update the userId state with the new value */
    }
    if (!name) {
      props.updateAlbumInList(
        id,
        title,
        Number(userId),
        props.album
      ); /* If name is not present, call the updateAlbumInList function from props and pass in the id, title, userId and album as parameters */
    }
  };
  return (
    <>
      <Navbar path="/" page="Home" />
      <div>
        <Card
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
              marginBottom: "0.8em",
            }}
            className="paragraph"
            color="text.secondary"
          >
            Update Album Details
          </Typography>
          <CardContent>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
              <Grid item xs={11}>
                <TextField
                  id="updateTitle"
                  type="number"
                  label="Enter Album Title :"
                  multiline
                  maxRows={2}
                  fullWidth
                  size="small"
                  required
                  onChange={(e) => getUpdateData(e, "title")}
                  value={title}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="updateId"
                  type="number"
                  label="Enter User Id :"
                  multiline
                  maxRows={2}
                  fullWidth
                  required
                  size="small"
                  onChange={(e) => getUpdateData(e, "id")}
                  value={userId}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Tooltip
              title={
                /* if data is not present then add tooltip message */
                title.length <= 0 || userId.length <= 0 ? "Adding data to the field will enable button" : ""
              }
              arrow
            >
              <span>
                <Button
                  component={Link}
                  to="/"
                  size="small"
                  variant="contained"
                  disabled={title.length <= 0 || userId.length <= 0} /* if data is not present then disable this button */
                  onClick={getUpdateData}
                >
                  Update
                </Button>
              </span>
            </Tooltip>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default UpdateAlbumCard;
