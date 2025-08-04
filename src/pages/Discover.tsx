function Discover() {
    let genres = ['', '', '', ''];
    let ziks = ['', '', '', '', '']

    return (
        <div>
            <h2 className="page-title mb-10">Découvrir</h2>
            <p className="subtitle mb-40">Explorez de nouveaux genres et artistes</p>

            <h3 className="section-title mb-20">Genres populaires</h3>
            <div className="grid grid-cols-5 gap-20 mb-40">
                {genres.map((genre) => (
                    <a className="card-genre">
                        <img src="" alt="" className="thumbnail mb-20" />
                        <h3 className="section-title">Electronic</h3>
                    </a>
                ))}
            </div>

            <h3 className="section-title mb-20">Nouveautés</h3>
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
        </div>
    );
}

export default Discover;