import { useState } from "react";
import { localStorageService } from "../../services/localStorageService";
import { userService } from "../../services/userService";
import { useDispatch } from "react-redux";
import "./login.scss";
import { setUserInfor } from "../../redux/userSlice";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let history = useHistory();

  let userInfo = {
    taiKhoan: email,
    matKhau: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    userService
      .postLogin(userInfo)
      .then((res) => {
        localStorageService.setUserInfo(res.data.content);
        dispatch(setUserInfor(res.data.content));
        setTimeout(() => {
          history.push("/");
        }, 1000);
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <div className="container">
          <p>user: hvta4</p>
          <span>pass:hvta4</span>
          <form>
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Email or phone number"
              name="taiKhoan"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="matKhau"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" onClick={handleSubmit}>
              Sign In
            </button>
            <span>
              New to Netflix? <b>Sign up now</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
