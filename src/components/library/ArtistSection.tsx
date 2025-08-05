import Artist from "../../cards/Artist";

function FavorisSection() {
    let artists = ['', '', ''];

    return (
        <>
            <h3 className="section-title mb-20">Artistes visités</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {artists.map((artist) => (
                    <Artist />
                ))}
            </div>
        </>
    );
}

export default FavorisSection;