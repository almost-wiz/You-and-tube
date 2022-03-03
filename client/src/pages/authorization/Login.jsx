import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center min-vh-100 gx-0">

        <div className="col-12 col-md-5 col-lg-4">
          <div className="card card-shadow border-0">
            <div className="card-body">
              <form className="row g-6">
                <div className="col-12">
                  <div className="text-center">
                    <h3 className="fw-bold mb-2">Sign In</h3>
                    <p>Login to your account</p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="signin-email" placeholder="Email" autoComplete="on"/>
                    <label htmlFor="signin-email">Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input type="password" className="form-control" id="signin-password" placeholder="Password" autoComplete="on"/>
                    <label htmlFor="signin-password">Password</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-block btn-lg btn-primary w-100" type="submit">Sign In</button>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-8">
            <p>Don't have an account yet? <Link to="/signup/">Sign up</Link></p>
            <p><Link to="/password-reset/">Forgot Password?</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
