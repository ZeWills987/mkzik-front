import image from "../assets/image/image.jpg";

function Header() {
    return (
        <header className='header'>
            <h1 className="header-title">Mkzik</h1>
            <input type="search" name="search" id="search" className='search' placeholder="Rechercher des ziks, des artistes..." />
            <img src={image} alt="" className="avatar" />
        </header>
    );
}

export default Header;