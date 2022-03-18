import { Link } from "../Link";

export const VideoHeader = () => {
  return (
    <div className="chat-header border-bottom py-4 py-lg-7 row">
      <div className="col-2 p-0 d-xl-none d-flex flex-row align-items-center">
        <Link
          to="/videos"
          force="true"
          className="btn btn-icon btn-primary rounded-circle ms-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};
