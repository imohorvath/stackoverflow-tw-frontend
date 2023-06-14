import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../img/forum-icon.png";

import "./Header.css";

const Header = () => {
  let location = useLocation();

  function HeaderButton({ route, children }) {
    return (
      <button
        className={
          location.pathname === route
            ? "nav-button nav-button-active"
            : "nav-button"
        }
      >
        <Link to={route} className="link">
          {children}
        </Link>
      </button>
    );
  }

  return (
    <>
      <div className="header">
        <div className="logo-section">
          <img src={logo} className="main-logo" alt="logo" />
          <h1>Forumizz</h1>
        </div>
        <div className="navbar">
          {/* <HeaderButton route="/">Cities</HeaderButton>
          <HeaderButton route="/bucketlist">Bucket List</HeaderButton>
          <HeaderButton route="/contactus">Contact Us</HeaderButton> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
