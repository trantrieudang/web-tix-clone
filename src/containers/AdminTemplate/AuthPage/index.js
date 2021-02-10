import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bgLogin from "../../../assets/images/backapp.jpg";

const useStyles = makeStyles(() => ({
  background_Auth: {
    backgroundImage: `url(${bgLogin})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  },
}));

export default function AuthPage() {
  const classes = useStyles();
  return (
    <div className={classes.background_Auth}>
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fab fa-facebook-square" />
              </span>
              <span>
                <i className="fab fa-google-plus-square" />
              </span>
              <span>
                <i className="fab fa-twitter-square" />
              </span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
              <div className="row align-items-center remember" >
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  defaultValue="Login"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="#">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}