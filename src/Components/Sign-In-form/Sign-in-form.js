import React, { Component } from "react";
import "./sign-in.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import lock from "../icons8-lock-24.png";
import Signupform from "../Sign-Up-Form/Sign-up-form";

class Signinform extends Component {
  constructor(props) {
    super(props);
    this.state = this.updateDataFromStorage();
  }

  updateDataFromStorage = () => {
    let data = JSON.parse(localStorage.getItem("userInform"));
    if (data === null) {
      data = {
        firstName: "",
        lastName: "",
        male: "",
        password: "",
        rememberPassword: false,
        receiveInf: false,
      };
    }
    console.log (data);
    return data;
  };

  setInformation = async (e) => {
    e.preventDefault();
    await this.setState({ male: e.target.elements.male.value });
    await this.setState({ password: e.target.elements.password.value });
    await this.setState({
      rememberPassword: e.target.elements.rememberPassword.checked,
    });
    const userInf = this.state;
    localStorage.setItem("userInform", JSON.stringify(userInf));
    e.target.elements.male.value = "";
    e.target.elements.password.value = "";
  };

  getPassword = () => {
    const password = this.state.rememberPassword === true ? this.state.password : "";
    console.log(password);
    return password;
  };

  render() {
    return (
      <div className="container">
        <div className="icon">
          <img className="icon__img" src={lock} alt="lock" />
        </div>
        <form className="form" onSubmit={this.setInformation}>
          <h2 className="form__title">Sign In</h2>
          <input
            className="form__email"
            type="email"
            name="male"
            placeholder="Email Address *"
            defaultValue={this.state.male}
          />
          <input
            className="form__password"
            type="password"
            name="password"
            placeholder="Password *"
            defaultValue={this.getPassword()}
          />
          <div className="form__checkbox">
            <input
              className="form__inp"
              id="check"
              type="checkbox"
              name="rememberPassword"
              checked={this.state.rememberPassword}
            />
            <label className="form__label" htmlFor="check">
              <p className="form__short">Remember me</p>
            </label>
          </div>
          <button type="submit" className="form__btn">
            Sign in
          </button>
        </form>
        <div className="container__textarea">
          <p>Forgot password?</p>
          <p>
            Don't have an account?{" "}
            <Link className="container__link" to="/">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="container__footer">
          Copiright &copy; Your Website 2020
        </div>
      </div>
    );
  }
}
export default Signinform;
