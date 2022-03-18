import { useContext } from "react";
import { Context } from "../../../context";
import { Link } from "../Link";
import { GroupChatAvatar } from "../svg/GroupChatAvatar";

export const MessagesHeader = ({ chat, setChatInfoModal }) => {
  const { store } = useContext(Context);
  let user = {};
  if (chat.members[0].id === store.user.id) {
    user = chat.members[1];
  } else {
    user = chat.members[0];
  }
  return (
    <div className="chat-header border-bottom py-4 py-lg-7">
      <div className="row align-items-center">
        <div className="col-2 d-xl-none">
          <Link
            to="/chats"
            force="true"
            className="btn p-0 icon icon-lg text-muted"
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

        <div className="col">
          <div className="row align-items-center gx-5">
            <div className="avatar mx-5 px-0">
              {chat.isDuo ? (
                <img
                  src={user.avatar}
                  className="img-fluid"
                  style={{ borderRadius: 100 }}
                  alt=""
                />
              ) : (
                <GroupChatAvatar />
              )}
            </div>

            <div className="col overflow-hidden">
              <h5 className="text-truncate">{chat?.display_title}</h5>
              <p className="text-truncate">
                {!chat?.isDuo
                  ? new Object(chat?.members).length + " members"
                  : "Private chat"
                }
              </p>
            </div>
          </div>
        </div>

        <div className="col-2 d-flex flex-column align-items-end overflow-hidden">
          <button
            className="btn icon icon-lg text-muted"
            onClick={() => {
              setChatInfoModal(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
