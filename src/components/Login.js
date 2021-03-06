import React, { useState } from "react";
import { auth } from "../firebase";
import "../styles/login.css";

import { connect } from "react-redux";
import { userLogin } from "../redux";

const Login = ({ userLoginDispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const register = () => {
    console.log("userLoginDispatch", userLoginDispatch);
    if (!name) {
      return alert("Please Enter a Full Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            const data = {
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            };
            userLoginDispatch(data);
          });
      })
      .catch((e) => alert(e));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        const data = {
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        };
        userLoginDispatch(data);
      })
      .catch((e) => alert(e));
  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginDispatch: (data) => dispatch(userLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
