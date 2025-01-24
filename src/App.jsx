import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AlbumsList from './components/AlbumsList';
import Player from './components/Player';
import Favorites from './components/Favorites';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column">
        <Navbar />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<><HeroSection /><AlbumsList /></>} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </div>
        <Player />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
