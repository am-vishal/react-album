import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AddAlbumCard from "./AddAlbumCard";
import Cards from "./Cards";
import UpdateAlbumCard from "./UpdateAlbumCard";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [albums, setAlbums] = useState([]); // state to keep track of all the albums
  const [updateAlbum, setUpdateAlbum] = useState({}); // state to keep track of the album to be updated
  const id = useRef(0); /*returns a mutable ref object */

  useEffect(() => {
    const fetchAlbums = async () => {
      //Fetching a list of albums from an external API
      const albums = await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((json) => json);
      setAlbums(albums);
    };
    fetchAlbums();
  }, []); /* This effect runs only when the component is first mounted, ensuring that the component fetches the album data from the API only once during the initial render. */

  // function to set the album and update the state
  const setAlbum = (album) => {
    setUpdateAlbum(album);
    setAlbums(album);
  };

  // function to delete an album from the list by its id
  const deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    // Filter out the album with the matching id from the list
    const newAlbums = albums.filter((album) => album.id !== id);
    setAlbum(newAlbums);

    // Show a toast message to confirm the deletion
    toast("Album has been successfully Deleted!");
  };

  // function to update an album in the list by its id
  const updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    // find the index of the old album in the list
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];
    if (id < 100) {
      // make a PUT request to the API to update the album
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => json);
    } else {
      // Update the album locally if it's not in the API
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle,
      };
    }
    // replace the old album with the updated album in the list
    albums[index] = updatedAlbum;
    setAlbum(albums);

    // Show a toast message to confirm the update
    toast("Album has been successfully Updated!");
  };

  // function to add an album to the list
  const addAlbumToList = (userId, title) => {
    // Make a POST request to the API to add the album
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        id: id,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
    const length = albums.length;
    // Get the last id of the album in the list
    const lastId = albums[length - 1].id;
    // Create a new album object
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    };
    // Add the new album to the list
    setAlbums([...albums, album]);

    // Show a toast message to confirm the addition
    toast("New album has been successfully added to the bottom of the list");
  };

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Render the Cards component on the root path, passing in the albums, setUpdateAlbum, and deleteAlbumFromList props */}
        <Route path="/react-album" element={<Cards albums={albums} setUpdateAlbum={setUpdateAlbum} deleteAlbumFromList={deleteAlbumFromList} />}></Route>
        {/* if /react-album fails to loads in production then / will load */}
        <Route path="/" element={<Cards albums={albums} setUpdateAlbum={setUpdateAlbum} deleteAlbumFromList={deleteAlbumFromList} />}></Route>
        {/* Render the AddAlbumCard component on the path "/add-album", passing in the addAlbumToList prop */}
        <Route path="/add-album" element={<AddAlbumCard addAlbumToList={addAlbumToList} />}></Route>
        {/* Render the UpdateAlbumCard component on the path "/update-album", passing in the album and updateAlbumInList props */}
        <Route path="/update-album" element={<UpdateAlbumCard album={updateAlbum} updateAlbumInList={updateAlbumInList} />}></Route>
      </Routes>
    </>
  );
};

export default App;
