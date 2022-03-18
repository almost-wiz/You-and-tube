import { useRef, useContext, useEffect } from "react";
import { useFetching } from "../../hooks/useFetching";
import { Context } from "../../context";
import { LoadingDots } from "../elements/Loading/LoadingDots";

export const LoginForm = () => {

  useEffect(() => {
    return () => {};
  }, []);

  const { store } = useContext(Context);

  const email = useRef();
  const password = useRef();
  const [fetchLogin, isLoading, error] = useFetching(async (email, password) => await store.login(email, password));
  const inputClassname = error ? "form-control is-invalid" : "form-control";

  const login = (e) => {
    e.preventDefault();
    fetchLogin(email.current.value, password.current.value);
  }

  return (
    <div className="card card-shadow border-0">
      <div className="card-body">
        <form className="row g-6" onSubmit={login}>
          <div className="col-12">
            <div className="text-center">
              <h3 className="fw-bold mb-2">Sign In</h3>
              <p>Login to your account</p>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating">
              <input
                ref={email}
                type="email"
                className={inputClassname}
                id="signin-email"
                placeholder="Email"
                autoComplete="on"
                required
              />
              <label htmlFor="signin-email">Email</label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating">
              <input
                ref={password}
                type="password"
                className={inputClassname}
                id="signin-password"
                placeholder="Password"
                autoComplete="on"
                required
              />
              <label htmlFor="signin-password">Password</label>
            </div>
          </div>

          {error && <h6 className="text-center text-danger">Please enter correct data and try again</h6>}

          <div className="col-12">
            <button
              className="btn btn-block btn-lg btn-primary w-100"
              disabled={isLoading ? true : false}
            >
              {isLoading
                ? <LoadingDots/>
                : <>Sign in</>
              }
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
