import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.style.css";
import { login } from "../api/auth.api";

const Login = ({ history }) => {
  const [email, setEmail] = useState("pbrmajhar@gmail.com");
  const [password, setPassword] = useState("admin");
  const dispatch = useDispatch();

  const loginHandler = async () => {
    const response = await login(email, password);
    if (response.status === 200) {
      dispatch({
        type: "LOGIN",
        payload: {
          _id: response.data._id,
          fullname: response.data.fullname,
          email: response.data.email,
          token: response.data.token,
        },
      });
      history.push("/dashboard");
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col m3"></div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
            <div className="card-content white-text">
              <span className="card-title">Login</span>
              <form onSubmit={loginHandler}>
                <div className="input-field">
                  <input
                    id="email"
                    type="email"
                    className="validate input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className="color-white">
                    Email
                  </label>
                </div>
                <div className="input-field">
                  <input
                    id="password"
                    type="password"
                    className="validate input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password" className="color-white">
                    Passsword
                  </label>
                </div>
              </form>
            </div>
            <div className="card-action">
              <button
                type="button"
                onClick={loginHandler}
                className="waves-effect waves-light btn"
              >
                Login
              </button>
              <button
                className="waves-effect waves-light btn"
                style={{ marginLeft: "5px" }}
                onClick={() => resetForm()}
              >
                <i className="material-icons left mar-0">cancel</i>
              </button>
            </div>
          </div>
        </div>
        <div className="col m3"></div>
      </div>
    </div>
  );
};

export default Login;
