import React, { useEffect } from "react";
import "./styles/app.css";
//components
import Feed from "./components/Feed";
import Header from "./components/headerComponents/Header";
import Sidebar from "./components/Sidebar";
//redux stuffs
import { connect } from "react-redux";
import { userLogin } from "./redux";
import Login from "./components/Login";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";

const App = ({ user, userLoginDispatch }) => {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        userLoginDispatch({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.profilePic,
        });
      } else {
        // user is not logged in
      }
    });
  }, []);

  console.log(user);
  return (
    // <Provider store={store}>
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
    // </Provider>
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
    userLoginDispatch: (data) => dispatch(userLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
