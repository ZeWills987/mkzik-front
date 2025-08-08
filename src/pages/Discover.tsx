import Zik from "../cards/Zik";
import image from "../assets/image/image.jpg";

function Discover() {
    let genres = ['', '', '', ''];
    let ziks = ['', '', '', '', ''];

    return (
        <div>
            <h2 className="page-title mb-10">Découvrir</h2>
            <p className="subtitle mb-40">Explorez de nouveaux genres et artistes</p>

            <h3 className="section-title mb-20">Genres populaires</h3>
            <div className="grid grid-cols-5 gap-20 mb-40">
                {genres.map((genre, index) => (
                    <a key={genre || index} className="card-genre">
                        <h3 className="section-title">Electronic</h3>
                    </a>
                ))}
            </div>

            <h3 className="section-title mb-20">Nouveautés</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik, index) => (
                    <Zik key={zik || index} />
                ))}
            </div>
        </div>
    );
}

export default Discover;