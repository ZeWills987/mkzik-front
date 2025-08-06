
import Zik from '../../cards/Zik';
import Filter from '../../components/Filter';
import { Outlet } from "react-router-dom";

function Library() {
    return (
        <>
            <h2 className="page-title mb-10">Ma bibliothèque</h2>
            <p className="subtitle mb-40">Votre collection personnelle</p>

            <Filter />
            <Outlet />
        </>
    );
}

export default Library;