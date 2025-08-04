import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Library from './pages/Library';
import Playlist from './pages/Playlist';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist" element={<Playlist />} />
        </Routes>
    );
}

export default AppRoutes;