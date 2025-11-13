import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const AppLayout = () => {
  return (
    <div>
      
      <main style={{ padding: "30px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
