import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Library from './pages/library/Library';
import Playlist from './pages/Playlist';
import AllSection from './components/library/AllSection';
import FavorisSection from './components/library/FavorisSection';
import ArtistSection from './components/library/ArtistSection';
import PlaylistSection from './components/library/PlaylistSection';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/library" element={<Library />} >
                <Route index element={<AllSection />} />
                <Route path="favoris" element={<FavorisSection />} />
                <Route path="artist" element={<ArtistSection />} />
                <Route path="playlist" element={<PlaylistSection />} />
            </Route>
            <Route path="/playlist" element={<Playlist />} />
        </Routes>
    );
}

export default AppRoutes;