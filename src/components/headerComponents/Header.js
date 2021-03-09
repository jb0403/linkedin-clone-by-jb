import React from "react";
import "../../styles/header.css";
import HeaderOptions from "./HeaderOptions";
//material-ui/icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { connect } from "react-redux";
import { userLogout } from "../../redux";
import { auth } from "../../firebase";

const Header = ({ userLogOutDispatch, user }) => {
  const logoutOfApp = () => {
    userLogOutDispatch();
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedIn Icon"
        />
        <div className="header__search">
          {/* searchIcons */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogOutDispatch: () => dispatch(userLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
