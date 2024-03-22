import React from "react";
import { Field, Form } from "react-final-form";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignIn = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userData, "gdsgf");

  const token = Cookies.get("token");

  const handleSubmit = (values, form) => {
    if (userData) {
      let userCredentials = userData.find(
        (item) => item.email === values.email
      );
      if (userCredentials) {
        if (
          userCredentials.email === values.email &&
          userCredentials.password === values.password
        ) {
          Cookies.set("token", JSON.stringify(userCredentials));
          navigate("/home");
        }
      }
    } else {
      alert("No user found");
    }
  };

  const validate = (values) => {
    const error = {};

    if (!values.email) {
      error.email = "Required";
    }

    if (!values.password) {
      error.password = "Required";
    }
    return error;
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <>
      <div className="bg-signin container-fluid">
        <Row>
          <Col lg={7} md={4}></Col>
          <Col lg={4} md={7}>
            <div
              className=""
              style={{
                marginTop: "150px",
                boxShadow: "#fff 0px 1px 10px -3px, #fff 0px 1px 6px -2px",
                border: "1px solid",
                padding: "20px 30px",
                borderRadius: "5px",
              }}
            >
              <Row>
                <h2 style={{ color: "#fff", marginBottom: "60px" }}>
                  Login to Your Account
                </h2>
                <Form
                  onSubmit={handleSubmit}
                  initialValues={initialValues}
                  validate={validate}
                  render={({ handleSubmit, error, values }) => (
                    <form onSubmit={handleSubmit}>
                      <Col lg={12}>
                        <Field name="email">
                          {({ input, meta }) => (
                            <div className=" mb-4">
                              <input
                                {...input}
                                placeholder="Email"
                                type="text"
                                className="signup-input"
                              />
                              {meta.touched && meta.error && (
                                <span className="text-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </Col>
                      <Col lg={12}>
                        <Field name="password">
                          {({ input, meta }) => (
                            <div className=" mb-5">
                              <input
                                {...input}
                                placeholder="Password"
                                type="password"
                                className="signup-input"
                              />
                              {meta.touched && meta.error && (
                                <span className="text-danger">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </Col>
                      <Col lg={12}>
                        <button className="signup-button mb-5" type="submit">
                          {" "}
                          SIGN IN
                        </button>
                      </Col>
                    </form>
                  )}
                />
                <p className="c-a-account mb-2  "> Dont have an account ? </p>
                <p className="no-acct mb-0" onClick={() => navigate("signup")}>
                  {" "}
                  SIGN UP{" "}
                </p>
              </Row>
            </div>
          </Col>
          <Col lg={1} md={1}></Col>
        </Row>
      </div>
    </>
  );
};

export default SignIn;
