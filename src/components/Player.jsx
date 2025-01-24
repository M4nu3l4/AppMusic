import { useSelector } from 'react-redux';

const Player = () => {
  const { currentTrack, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="player bg-dark text-white p-3 fixed-bottom">
      {currentTrack ? (
        <div>
          <p>In riproduzione: {currentTrack.title} - {currentTrack.artist.name}</p>
          <audio src={currentTrack.preview} controls autoPlay={isPlaying}></audio>
        </div>
      ) : (
        <p>Nessun brano in riproduzione</p>
      )}
    </div>
  );
};

export default Player;
