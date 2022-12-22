import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link className="mr-5" to="/">
          Home
        </Link>
        <Link to="/all">All Sectors</Link>
      </div>
    </div>
  );
};

export default Header;
