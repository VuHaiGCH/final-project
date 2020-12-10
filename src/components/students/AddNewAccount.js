import React, { Component } from "react";
import { signUp } from "../../action/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AddNewAccount extends Component {
  state = {
    email: "",
    password: "",
    displayName: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {

    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            {" "}
            <h4>Sign Up</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Enter Username</label>
            <input
              type="text"
              className="form-control"
              id="displayName"
              onChange={this.handleChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewAccount);
