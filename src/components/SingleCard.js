import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

const SingleCard = (props) => {
  return (
    <div className="card">
      <Card
        sx={{
          /* styling for the Card component */ maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <CardMedia sx={{ height: "100%", marginBottom: "-1px", opacity: 0.6 }} image={require("../assets/bg.webp")} title="background" />
        <CardContent
          sx={{
            /* styling for the CardContent */ height: "100%",
            width: "100%",
            position: "absolute",
            opacity: 0.8,
            zIndex: 1,
            background: "#00152ee8",
          }}
        >
          <p
            style={{
              fontFamily: "Cherry Swash",
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#c5e2ff",
            }}
            variant="body2"
          >
            {props.album.title} {/* displaying the title of the album */}
          </p>
        </CardContent>
        <Divider />
        <CardActions
          disableSpacing
          sx={{
            /* styling for the CardActions */
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            mt: "auto",
            zIndex: 2,
            backgroundColor: "#06264a !important",
          }}
        >
          <Button
            component={Link}
            to="/update-album"
            size="small"
            variant="contained"
            endIcon={<EditIcon />}
            onClick={() => props.setUpdateAlbum(props.album)} /* call setUpdateAlbum function and pass the props.album as a parameter */
          >
            Update
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => props.deleteAlbumFromList(props.album.id)} /* call deleteAlbumFromList function and pass the props album id as a parameter */
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleCard;
