import Zik from "../../cards/Zik";
import ArtistSection from "./ArtistSection";
import FavorisSection from "./FavorisSection";
import PlaylistSection from "./PlaylistSection";

function AllSection() {
    let ziks = ['', '', ''];

    return (
        <>
            <h3 className="section-title mb-20">Récément écoutés</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <Zik />
                ))}
            </div>
            <FavorisSection />
            <ArtistSection />
            <PlaylistSection />
        </>
    );
}

export default AllSection;