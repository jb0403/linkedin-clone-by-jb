import React from "react";
import "../../styles/headerOptions.css";
import { Avatar } from "@material-ui/core";

import { connect } from "react-redux";

const HeaderOptions = ({ avatar, Icon, title, onClick, user }) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(HeaderOptions);
