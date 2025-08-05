function Player() {
    return (
        <>
            <div className="player justify-between">
                <div className="current-zik flex align-items-center gap-10">
                    <img src="" alt="" />
                    <div className="flex flex-col gap-5">
                        <a href=""><h4 className="title">Neon Lights</h4></a>
                        <a href=""><p>Luna Eclipse</p></a>
                    </div>
                </div>
                <div className="curent-time">

                </div>
                <audio controls autoPlay>
                    <source src="sons.mp3" type="audio/mp3"></source>
                </audio>
            </div>
        </>
    );
}

export default Player;