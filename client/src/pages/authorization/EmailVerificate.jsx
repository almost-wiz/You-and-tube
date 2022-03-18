import { useParams } from "react-router";
import { LoadingPage } from "../../components/elements/Loading/LoadingPage";
import { Error } from "../../components/elements/Error";
import { useFetching } from "../../hooks/useFetching";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginService from "../../API/LoginService";

export const EmailVerificate = () => {
  const params = useParams();

  const [fetchActivation, isLoading, error] = useFetching(
    async (uid, token) => await LoginService.activateUser(uid, token)
  );

  useEffect(() => {
    fetchActivation(params["uid"], params["token"]);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  } else if (error) {
    return <Error code={400} message="Bad request" />;
  } else {
    return (
      <div className="container vh-100">
        <div className="row align-items-center justify-content-center h-100 gx-0">
          <div className="text-center">
            <h4>
              Success!
              <br />
              Your account has been activated.
            </h4>
            <h5>
              Now you need to <Link to="/login">log in system</Link>
            </h5>
          </div>
        </div>
      </div>
    );
  }
};
