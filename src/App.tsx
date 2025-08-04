import { Link } from 'react-router-dom';
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';
import Player from './partials/Player';

import AppRoutes from './routes';

export default function App() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-page layout-maxed">
            <AppRoutes />
          </div>
        </div>
      </div>
      <Player />
    </>
  );
}
