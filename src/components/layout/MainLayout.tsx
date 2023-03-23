import { Outlet } from 'react-router-dom';
import NavBar from '../nav/NavBar';

const MainLayout = () => {
  return (
    <div className="m-20">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
