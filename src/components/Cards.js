import List from "./SingleCard";
import Navbar from "./Navbar";

const Cards = (props) => {
  const { albums, setUpdateAlbum, deleteAlbumFromList } = props;
  return (
    <>
      <Navbar page="Add Album" path="/add-album" />
      <div className="card-list">
        {/* Render the List component for each album in the albums array*/}
        {albums.map((album) => (
          <List album={album} key={album.id} setUpdateAlbum={setUpdateAlbum} deleteAlbumFromList={deleteAlbumFromList} />
        ))}
      </div>
    </>
  );
};

export default Cards;
