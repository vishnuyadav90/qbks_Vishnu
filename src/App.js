import "./App.css";
import { Outlet } from "react-router-dom";
import SideBar from "./components/sideNav";

function App() {
  return (
    <div className="main-container">
      <div className="main-header">
        <h1>My Books</h1>
      </div>
      <div className="main-body-layout">
        <div className="side-nav">
          <SideBar />
        </div>
        <div className="main-body-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
