import logo from "assets/images/egghead-logo.png";
import { Link } from "gatsby";
import { useSiteMetadata } from "hooks";
import React from "react";

const Header = () => {
  const { companyName } = useSiteMetadata();
  return (
    <header className="page-header">
      <nav>
        <Link to="/">
          <img src={logo} alt={`${companyName} Logo`} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
