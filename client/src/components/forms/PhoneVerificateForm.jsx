import { useContext, useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { Context } from "../../context";
import { Error } from "../../components/elements/Error";
import { LoadingDots } from "../elements/Loading/LoadingDots";
import LoginService from "../../API/LoginService";

export const PhoneVerificateForm = () => {
  const { store } = useContext(Context);

  const [code, setCode] = useState("");
  const [fetchSendCode, isSendLoading, sendError, sendSuccess] = useFetching(
    async (phone) => await LoginService.send_code(phone)
  );
  const [fetchValidateCode, isValidateLoading, validateError] = useFetching(
    async (phone, code, password) => {
      await store.validate_code(phone, code, password);
    }
  );

  useEffect(() => {
    if (store.user.phone) {
      fetchSendCode(store.user.phone);
    }
    return () => {};
  }, []);

  const verify = (e) => {
    e.preventDefault();
    fetchValidateCode(store.user.phone, code, store.user.password);
  };

  if (sendError || !store.user.phone) {
    return <Error code={400} message="Bad Request" />;
  } else if (!sendSuccess || isSendLoading) {
    return <LoadingDots size="60px" display="block" />;
  }

  return (
    <div className="card card-shadow border-0">
      <div className="card-body">
        <form className="row g-6" onSubmit={verify}>
          <div className="col-12">
            <div className="text-center">
              <h3 className="fw-bold mb-2">Phone verification</h3>
              <p>We have sent a code to your phone, please enter it</p>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                className="form-control"
                id="code"
                placeholder="code"
                autoComplete="on"
                required
              />
              <label htmlFor="code">Code</label>
            </div>
          </div>

          {validateError && (
            <h6 className="text-center text-danger">
              Please enter correct data and try again
            </h6>
          )}

          <div className="col-12">
            <button
              className="btn btn-block btn-lg btn-primary w-100"
              disabled={isValidateLoading ? true : false}
            >
              {isValidateLoading ? <LoadingDots /> : <>Check</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
