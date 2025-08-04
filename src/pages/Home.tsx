
function Home() {
    let ziks = ['', '', '', '', '']


    return (
        <>
            <h2 className="page-title mb-10">Bonjour</h2>
            <p className="subtitle mb-40">Découvrez votre musique préférée</p>

            <h3 className="section-title mb-20">Récément écoutés</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <div className="card-zik">
                        <img src="" alt="" className="thumbnail mb-20" />
                        <a href="">
                            <h4 className="card-title">Neon Light</h4>
                        </a>
                        <a href="">
                            <p className="card-descrition">Luna Eclispe</p>
                        </a>
                    </div>
                ))}
            </div>

            <h3 className="section-title mb-20">Album recommandé</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <div className="card-zik">
                        <img src="" alt="" className="thumbnail mb-20" />
                        <a href="">
                            <h4 className="card-title">Neon Light</h4>
                        </a>
                        <a href="">
                            <p className="card-descrition">Luna Eclispe</p>
                        </a>
                    </div>
                ))}
            </div>

            <h3 className="section-title mb-20">Artistes tendance</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <div className="card-artist">
                        <img src="" alt="" className="thumbnail mb-20" />
                        <a href="">
                            <h4 className="card-title">Neon Light</h4>
                        </a>
                        <a href="">
                            <p className="card-descrition">Luna Eclispe</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;