import React from 'react';
import PropTypes from 'prop-types';
import NavLink from "react-router-dom/es/NavLink";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark text-white mb-2">
      <NavLink className="navbar-brand"
         to="/home" activeClassName="text-warning">TRACKING TIME</NavLink>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/welcome" activeClassName="text-warning">
            Welcome
          </NavLink>
          <NavLink className="nav-item nav-link" to="/tracking" activeClassName="text-warning">
            Track
          </NavLink>
        </ul>
      </div>
    </nav>
  )
};

NavBar.propTypes = {
  config: PropTypes.shape({
    theme: PropTypes.string,
  }),
  setConfig: PropTypes.func
};

export default NavBar;