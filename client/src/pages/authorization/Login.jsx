import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { LoginForm } from "../../components/forms/LoginForm";
import { PhoneVerificateForm } from "../../components/forms/PhoneVerificateForm";
import { observer } from 'mobx-react-lite'

export const Login = observer(() => {

  useEffect(() => {
    return () => {};
  }, []);

  const { store } = useContext(Context);

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center min-vh-100 gx-0">

        <div className="col-12 col-md-5 col-lg-4">
          {store.proceed_phone_verification
            ? <PhoneVerificateForm />
            : <LoginForm />
          }

          <div className="text-center mt-8">
            <p>Don't have an account yet? <Link to="/signup/">Sign up</Link></p>
            <p><Link to="/password-reset/">Forgot Password?</Link></p>
          </div>

        </div>

      </div>
    </div>
  )
})
