import React from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/movies" exact>
        Movies
      </NavLink>
      <NavLink to="/directors" exact>
        Directors
      </NavLink>
      <NavLink to="/actors" exact>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
