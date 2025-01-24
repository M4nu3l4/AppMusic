import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/store/favoritesSlice";
import { playTrack } from "../redux/store/playerSlice";
import { Container, Col, Row } from "react-bootstrap";

const AlbumsList = () => {
  const [, setTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const dispatch = useDispatch();
  const searchTracks = async (query) => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await response.json();
      setTracks(data.tracks.data);
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  };

  useEffect(() => {
    searchTracks("popular");
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}")
      .then((response) => response.json())
      .then((data) => setAlbums(data.data))
      .catch((error) => console.error("Errore durante il fetch:", error));
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchTracks(searchQuery);
    }
  };

  return (
    <>
      <div
        className="albums-list p-3 bg-black text-white"
        style={{ minHeight: "20vh" }}
      >
        <div
          className="d-flex justify-content-center "
          style={{ minHeight: "20vh" }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={6} className="text-center">
                <h2>Cerca Artisti e Brani</h2>
                <form onSubmit={handleSearch} className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca artisti o brani"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="btn btn-secondary mt-3">
                    Cerca
                  </button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="albums-list p-3">
        <h2 className="text-center">Nuove Uscite</h2>
        <div className="row">
          {albums.map((album) => (
            <div key={album.id} className="col-sm-12 col-md-4 col-lg-3 m-3">
              <div className="card roundend-3">
                <img
                  src={album.album.cover_medium}
                  alt={album.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-white text-center">
                    {album.title}
                  </h5>
                  <p className="card-text text-white text-center">
                    {album.artist.name}
                  </p>
                  <button
                    className="btn btn-secondary btn-sm m-3"
                    onClick={() => dispatch(playTrack(album))}
                  >
                    Ascolta
                  </button>
                  <button
                    className="btn btn-secondary btn-sm ml-2"
                    onClick={() => dispatch(addFavorite(album))}
                  >
                    Aggiungi ai Preferiti
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlbumsList;
