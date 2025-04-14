import Navbar from "@components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;
