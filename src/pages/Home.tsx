import Zik from '../cards/Zik';
import Artist from '../cards/Artist';

function Home() {
    let ziks = ['', '', '', '', '']

    return (
        <>
            <h2 className="page-title mb-10">Kaoha Nui</h2>
            <p className="subtitle mb-40">Découvrez votre musique préférée</p>

            <h3 className="section-title mb-20">Récément écoutés</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <Zik />
                ))}
            </div>

            <h3 className="section-title mb-20">Album recommandé</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <Zik />
                ))}
            </div>

            <h3 className="section-title mb-20">Artistes tendance</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <Artist />
                ))}
            </div>
        </>
    );
}

export default Home;