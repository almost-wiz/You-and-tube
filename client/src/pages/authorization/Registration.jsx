import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input/input";
import { useState, useRef } from "react";
import { useFetching } from "../../hooks/useFetching";
import { LoadingDots } from "../../components/elements/Loading/LoadingDots";
import LoginService from "../../API/LoginService";

export const Registration = () => {
  const name = useRef();
  const username = useRef();
  const email = useRef();
  const [phone, setPhone] = useState("");
  const password = useRef();
  const [fetchSignup, isLoading, error, success] = useFetching(
    async (name, username, email, phone, password) => {
      await LoginService.signup(name, username, email, phone, password);
    }
  );

  const signup = (e) => {
    e.preventDefault();
    fetchSignup(
      name.current.value,
      username.current.value,
      email.current.value,
      phone,
      password.current.value
    );
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center min-vh-100 gx-0">
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card card-shadow border-0">
            <div className="card-body">
              <form className="row g-6" onSubmit={signup}>
                <div className="col-12">
                  <div className="text-center">
                    <h3 className="fw-bold mb-2">Sign Up</h3>
                    <p>Follow the easy steps</p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      ref={name}
                      type="text"
                      className={
                        error && error.name
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="signup-name"
                      placeholder="Name"
                      autoComplete="on"
                      required
                    />
                    <label htmlFor="signup-name">Name</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      ref={username}
                      type="text"
                      className={
                        error && error.username
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="signup-username"
                      placeholder="Username"
                      autoComplete="on"
                      required
                    />
                    <label htmlFor="signup-username">Username</label>
                    <div className="invalid-feedback">
                      {error && error.username}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      ref={email}
                      type="email"
                      className={
                        error && error.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="signup-email"
                      placeholder="Email"
                      autoComplete="on"
                      required
                    />
                    <label htmlFor="signup-email">Email</label>
                    <div className="invalid-feedback">
                      {error && error.email}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <PhoneInput
                      value={phone}
                      onChange={setPhone}
                      className={
                        error && error.phone
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="signup-phone"
                      placeholder="Phone"
                      autoComplete="on"
                      required
                    />
                    <label htmlFor="signup-phone">Phone</label>
                    <div className="invalid-feedback">
                      {error && error.phone}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      ref={password}
                      type="password"
                      className={
                        error && error.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="signup-password"
                      placeholder="Password"
                      autoComplete="on"
                      required
                    />
                    <label htmlFor="signup-password">Password</label>
                  </div>
                </div>

                {error && (
                  <h6 className="text-center text-danger">
                    Please enter correct data and try again
                  </h6>
                )}
                {success && (
                  <h6 className="text-center text-primary">
                    Now you need to activate your account.
                    <br />
                    An email has been sent to your email address with a
                    confirmation link.
                  </h6>
                )}

                <div className="col-12">
                  <button
                    className="btn btn-block btn-lg btn-primary w-100"
                    disabled={isLoading ? true : false}
                  >
                    {isLoading ? <LoadingDots /> : <>Create Account</>}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-8">
            <p>
              Already have an account? <Link to="/login/">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
