import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
