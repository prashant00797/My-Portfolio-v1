//dependency
import React from "react";
import { isMobile } from "react-device-detect";

//local dependency
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { NavbarConstant } from "../../Data/constant";

//component
import { SideBar } from "../SideBar/SideBar";

//css imports
import "./navbar.scss";

const renderLeftNavbar = () => {
  return (
    <div className="ui-navbar__left">
      <Link to="/home" className="ui-navbar__left__link">
        {NavbarConstant.HEADER_LABEL}
      </Link>
    </div>
  );
};

const renderRightNavbar = () => {
  return (
    <div className="ui-navbar__right">
      <LinkScroll
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        to="work"
        className="ui-navbar__right__links"
      >
        {NavbarConstant.WORK}
      </LinkScroll>
      <LinkScroll
        spy={true}
        smooth={true}
        offset={1500}
        duration={500}
        to="contact"
        className="ui-navbar__right__links"
      >
        {NavbarConstant.CONTACT}
      </LinkScroll>
    </div>
  );
};

const renderAboutBackButton = () => {
  return (
    <div className="ui-navbar__left">
      <Link to="/home" className="ui-navbar__left__link">
        {NavbarConstant.BACK}
      </Link>
    </div>
  );
};

export const Navbar = () => {
  const location = useLocation();
  return (
    <div className="ui-navbar">
      {location.pathname === "/home" ? (
        <>
          {renderLeftNavbar()}
          {isMobile ? <SideBar /> : renderRightNavbar()}
        </>
      ) : (
        renderAboutBackButton()
      )}
    </div>
  );
};
