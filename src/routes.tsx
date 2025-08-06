import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Library from './pages/library/Library';
import AllSection from './components/library/AllSection';
import FavorisSection from './components/library/FavorisSection';
import ArtistSection from './components/library/ArtistSection';
import PlaylistSection from './components/library/PlaylistSection';
import Favoris from './pages/Favoris';

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
            <Route path="/favoris" element={<Favoris />} />
        </Routes>
    );
}

export default AppRoutes;