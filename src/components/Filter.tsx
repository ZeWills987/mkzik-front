import { NavLink } from 'react-router-dom';

function Filter() {
    return (
        <>
            <div className="filter">
                <ul className='menu-items flex'>
                    <li className='item'>
                        <NavLink to='/library' className={({ isActive }) => (isActive ? " active" : "")} end>
                            Tout
                        </NavLink >
                    </li>
                    <li className='item'>
                        <NavLink to='/library/favoris' className={({ isActive }) => (isActive ? " active" : "")} end>
                            Favoris
                        </NavLink >
                    </li>
                    <li className='item'>
                        <NavLink to='/library/artist' className={({ isActive }) => (isActive ? " active" : "")} end>
                            Artistes
                        </NavLink >
                    </li>
                    <li className='item'>
                        <NavLink to='/library/playlist' className={({ isActive }) => (isActive ? " active" : "")} end>
                            Playlists
                        </NavLink >
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Filter;