import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        TEK STORE
      </NavLink>
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Navbar;