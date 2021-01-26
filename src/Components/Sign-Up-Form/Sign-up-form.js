import React, { Component } from "react";
import "./sign-up.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Signinform from "../Sign-In-form/Sign-in-form";
import lock from "../icons8-lock-24.png";

class Signupform extends Component {
  state = {
    firstName: "",
    lastName: "",
    male: "",
    password: "",
    rememberPassword: false,
    receiveInf: false,
  };

  updateDataFromStorage = () => {
    let data = JSON.parse(localStorage.getItem("userInform"));
    if (data === null) {
      data = this.state;
    }
    return data;
  };

  setInformation = async (e) => {
    e.preventDefault();
    await this.setState({ firstName: e.target.elements.firstName.value });
    await this.setState({ lastName: e.target.elements.lastName.value });
    await this.setState({ male: e.target.elements.male.value });
    await this.setState({ password: e.target.elements.password.value });
    await this.setState({ receiveInf: e.target.elements.receiveInf.checked });
    const userInf = this.state;
    localStorage.setItem("userInform", JSON.stringify(userInf));
    e.target.elements.firstName.value = "";
    e.target.elements.lastName.value = "";
    e.target.elements.male.value = "";
    e.target.elements.password.value = "";
  };

  render() {
    return (
      <div className="container">
        <div className="icon">
          <img className="icon__img" src={lock} alt="lock" />
        </div>
        <form className="form" onSubmit={this.setInformation}>
          <h2 className="form__title">Sign Up</h2>
          <div className="form__name">
            <input type="text" name="firstName" placeholder="First Name *" />
            <input type="text" name="lastName" placeholder="Last Name *" />
          </div>
          <input
            className="form__email"
            type="email"
            name="male"
            placeholder="Email Address *"
          />
          <input
            className="form__password"
            type="password"
            name="password"
            placeholder="Password *"
          />
          <div className="form__checkbox">
            <input
              className="form__inp"
              id="check"
              type="checkbox"
              name="receiveInf"
            />
            <label className="form__label" htmlFor="check">
              <p>
                I want to receive inspiration, marketing promotions and updates
                via email.
              </p>
            </label>
          </div>
          <button type="submit" className="form__btn">
            Sign Up
          </button>
        </form>
        <div className="container__text">
          <p>
            Already have an account?{" "}
            <Link className="container__link" to="/sign-in-form">
              {" "}
              sign in{" "}
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
export default Signupform;
