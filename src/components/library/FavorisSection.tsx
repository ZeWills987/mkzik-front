import Zik from "../../cards/Zik";

function FavorisSection() {
    let ziks = ['', '', ''];

    return (
        <>
            <h3 className="section-title mb-20">Zik favoris</h3>
            <div className="grid grid-cols-5 gap-20 mb-30">
                {ziks.map((zik, index) => (
                    <Zik key={zik || index} />
                ))}
            </div>
        </>
    );
}

export default FavorisSection;