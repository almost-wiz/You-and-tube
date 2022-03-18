import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="container vh-100">
      <div className="row align-items-center justify-content-center h-100 gx-0 text-center">
        <div>
          <h1 className="fw-bold">This is an app</h1>
          <h3>More info wil be here soon...</h3>
          <Link to="/login">Log in system</Link>
        </div>
        <h6 className='text-muted'>(but it is not exactly)</h6>
      </div>
    </div>
  )
}
