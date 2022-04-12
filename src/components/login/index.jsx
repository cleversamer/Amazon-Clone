import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../../store/user";
import { Spinner } from "@chakra-ui/react";
import "./index.css";

const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3) {
      dispatch(authUser({ name }));
      setName("");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        history("/home");
      }, 2000);
    }
  };

  const handleOnNameChange = (e) => {
    const { value } = e.currentTarget;
    if (value.length <= 16) {
      setName(value);
    }
  };

  return (
    <div className="login">
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <form className="login__box">
          <h2 className="login__box-heading">Sign-In</h2>

          <div className="login__input">
            <label className="login__input-label" htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              className="login__input-box"
              type="text"
              value={name}
              onChange={handleOnNameChange}
            />

            <button
              className="login__input-btn"
              type="submit"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>

          <p className="login__info">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <p className="login__info">Need help?</p>
        </form>
      )}
    </div>
  );
};

export default Login;
