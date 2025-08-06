import Zik from "../cards/Zik";

function Favoris() {
    let ziks = ['', '', '', '', ''];

    return (
        <>
            <h2 className="page-title mb-10">Favoris </h2>
            <p className="subtitle mb-40">Retrouver vos ziks likées ici</p>

            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik) => (
                    <Zik />
                ))}
                {ziks.map((zik) => (
                    <Zik />
                ))}
                {ziks.map((zik) => (
                    <Zik />
                ))}
                {ziks.map((zik) => (
                    <Zik />
                ))}
            </div>
        </>
    );
}

export default Favoris;