import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Link } from "./Link";
import { Context } from "../../context";
import { observer } from "mobx-react-lite";

export const Navbar = observer(({ setModal }) => {
  const { store } = useContext(Context);
  const location = useLocation().pathname.split("/")[1];

  return (
    <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar">
      <span title="You and Tube" className="d-none d-xl-block mb-6">
        <Link to="/videos/recommendations">
          <img src="/favicon.ico" alt="Logo" />
        </Link>
      </span>

      <ul className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3">
        <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
          <span className="nav-link py-0 py-lg-8" title="">
            <div className="icon icon-xl"></div>
          </span>
        </li>

        <li className="nav-item">
          <span className="nav-link py-0 py-lg-8" title="Videos">
            <Link
              to="/videos/recommendations"
              className={
                ["videos", "watch"].find((i) => i === location)
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <div className="icon icon-xl">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37px" height="32px" viewBox="0 0 37 32" enableBackground="new 0 0 37 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><g><path d="M7.5,0h-6C0.631,0,0,0.631,0,1.5v29C0,31.369,0.631,32,1.5,32h6h22h6c0.869,0,1.5-0.631,1.5-1.5v-29 C37,0.631,36.369,0,35.5,0h-6H7.5z M1,30.5v-29C1,1.187,1.187,1,1.5,1H7v30H1.5C1.187,31,1,30.813,1,30.5z M8,31V1h21v30H8z M36,1.5v29c0,0.313-0.187,0.5-0.5,0.5H30V1h5.5C35.813,1,36,1.187,36,1.5z"/><path fill="#828282" d="M14.777,10.084c-0.153-0.102-0.351-0.112-0.514-0.025C14.102,10.146,14,10.315,14,10.5v12 c0,0.185,0.102,0.354,0.264,0.441C14.338,22.98,14.419,23,14.5,23c0.097,0,0.193-0.028,0.277-0.084l9-6 C23.916,16.823,24,16.667,24,16.5s-0.084-0.323-0.223-0.416L14.777,10.084z M15,21.566V11.434l7.599,5.066L15,21.566z"/> <path fill="#828282" d="M5,8H3C2.724,8,2.5,8.224,2.5,8.5S2.724,9,3,9h2c0.276,0,0.5-0.224,0.5-0.5S5.276,8,5,8z"/> <path fill="#828282" d="M3,5h2c0.276,0,0.5-0.224,0.5-0.5S5.276,4,5,4H3C2.724,4,2.5,4.224,2.5,4.5S2.724,5,3,5z"/><path fill="#828282" d="M5,12H3c-0.276,0-0.5,0.224-0.5,0.5S2.724,13,3,13h2c0.276,0,0.5-0.224,0.5-0.5S5.276,12,5,12z"/> <path fill="#828282" d="M5,16H3c-0.276,0-0.5,0.224-0.5,0.5S2.724,17,3,17h2c0.276,0,0.5-0.224,0.5-0.5S5.276,16,5,16z"/> <path fill="#828282" d="M5,20H3c-0.276,0-0.5,0.224-0.5,0.5S2.724,21,3,21h2c0.276,0,0.5-0.224,0.5-0.5S5.276,20,5,20z"/> <path fill="#828282" d="M5,24H3c-0.276,0-0.5,0.224-0.5,0.5S2.724,25,3,25h2c0.276,0,0.5-0.224,0.5-0.5S5.276,24,5,24z"/> <path fill="#828282" d="M5,28H3c-0.276,0-0.5,0.224-0.5,0.5S2.724,29,3,29h2c0.276,0,0.5-0.224,0.5-0.5S5.276,28,5,28z"/> <path fill="#828282" d="M32,9h2c0.276,0,0.5-0.224,0.5-0.5S34.276,8,34,8h-2c-0.276,0-0.5,0.224-0.5,0.5S31.724,9,32,9z"/> <path fill="#828282" d="M32,5h2c0.276,0,0.5-0.224,0.5-0.5S34.276,4,34,4h-2c-0.276,0-0.5,0.224-0.5,0.5S31.724,5,32,5z"/> <path fill="#828282" d="M32,13h2c0.276,0,0.5-0.224,0.5-0.5S34.276,12,34,12h-2c-0.276,0-0.5,0.224-0.5,0.5S31.724,13,32,13z"/> <path fill="#828282" d="M32,17h2c0.276,0,0.5-0.224,0.5-0.5S34.276,16,34,16h-2c-0.276,0-0.5,0.224-0.5,0.5S31.724,17,32,17z"/> <path fill="#828282" d="M32,21h2c0.276,0,0.5-0.224,0.5-0.5S34.276,20,34,20h-2c-0.276,0-0.5,0.224-0.5,0.5S31.724,21,32,21z"/> <path fill="#828282" d="M32,25h2c0.276,0,0.5-0.224,0.5-0.5S34.276,24,34,24h-2c-0.276,0-0.5,0.224-0.5,0.5S31.724,25,32,25z"/> <path fill="#828282" d="M34,28h-2c-0.276,0-0.5,0.224-0.5,0.5S31.724,29,32,29h2c0.276,0,0.5-0.224,0.5-0.5S34.276,28,34,28z"/> </g></svg>
              </div>
            </Link>
          </span>
        </li>

        <li className="nav-item">
          <span className="nav-link py-0 py-lg-8" title="Create chat">
            <Link
              to="/start-chat"
              className={
                location === "start-chat" ? "nav-link active" : "nav-link"
              }
            >
              <div className="icon icon-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
            </Link>
          </span>
        </li>

        <li className="nav-item d-xl-block flex-xl-grow-1">
          <span className="nav-link py-0 py-lg-8" title="Chats">
            <Link
              to="/chats"
              className={
                ["chats", "messages"].find((i) => i === location)
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <div className="icon icon-xl icon-badged">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <div className="badge badge-circle bg-primary">
                  <span></span>
                </div>
              </div>
            </Link>
          </span>
        </li>

        <li className="nav-item">
          <span className="nav-link py-0 py-lg-8" title="Settings">
            <Link
              to="/settings"
              className={
                location === "settings" ? "nav-link active" : "nav-link"
              }
            >
              <div className="icon icon-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
            </Link>
          </span>
        </li>

        <li className="nav-item">
          <button
            className="btn nav-link p-0 mt-lg-2"
            onClick={() => setModal(true)}
          >
            <div className="avatar mx-auto d-none d-xl-block">
              <img className="avatar-img" src={store.user.avatar} alt="" />
            </div>
            <div className="avatar avatar-xs d-xl-none">
              <img className="avatar-img" src={store.user.avatar} alt="" />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
});
