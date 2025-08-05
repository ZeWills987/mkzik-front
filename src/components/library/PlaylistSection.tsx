import Zik from "../../cards/Zik";

function PlaylistSection() {
    let playlists = ['', '', ''];

    return (
        <>
            <h3 className="section-title mb-20">Vos playlists</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {playlists.map((playlist) => (
                    <Zik />
                ))}
            </div>
        </>
    );
}

export default PlaylistSection;