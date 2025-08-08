import image from "../assets/image/image.jpg";

function Zik() {
    return (
        <>
            <div className="card-zik">
                <img src={image} alt="" className="thumbnail mb-20" />
                <a href="">
                    <h4 className="card-title">Neon Light</h4>
                </a>
                <a href="">
                    <p className="card-descrition">Luna Eclispe</p>
                </a>
            </div>
        </>
    );
}

export default Zik; 