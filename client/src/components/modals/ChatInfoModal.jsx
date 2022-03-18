import { useContext } from "react";
import { Context } from "../../context";
import { useFetching } from "../../hooks/useFetching";
import { UserCard } from "../elements/chats/UserCards/UserDropdownItem";
import { GroupChatAvatar } from "../elements/svg/GroupChatAvatar";
import ChatsService from "../../API/ChatsService";

export const ChatInfoModal = ({ setModal, data }) => {
  const { store } = useContext(Context);

  const chat = data.chat;
  const setChat = data.setChat;

  let user = {};
  if (chat.members[0].id === store.user.id) {
    user = chat.members[1];
  } else {
    user = chat.members[0];
  }

  const [fetchLeaveChat] = useFetching(async (id) => {
    await ChatsService.leave_chat(id);
    setChat({
      ...chat,
      members: chat.members.filter((i) => i.id !== store.user.id),
    });
  });

  const leaveChat = () => {
    fetchLeaveChat(chat.id);
  };

  return (
    <>
      <div className="offcanvas-header py-4 py-lg-7 border-bottom">
        <button
          className="btn icon icon-lg text-muted"
          onClick={() => {
            setModal(false);
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
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="dropdown">
          <button
            className="btn icon icon-lg text-muted"
            data-bs-toggle="dropdown"
            aria-expanded="false"
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

          <ul className="dropdown-menu">
            <li>
              <button
                className="btn dropdown-item d-flex align-items-center text-danger"
                onClick={leaveChat}
              >
                Leave
                <div className="icon ms-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="offcanvas-body hide-scrollbar">
        <div className="text-center py-10">
          <div className="row gy-6">
            <div className="col-12">
              <div className="avatar avatar-xl mx-auto">
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
            </div>

            <div className="col-12">
              <h4>{chat.display_title}</h4>
              <p>{chat.description}</p>
            </div>
          </div>
        </div>

        <div className="py-2">
          <ul className="list-group list-group-flush">
            {chat.members.map((item) => (
              <UserCard
                chat={chat}
                setChat={setChat}
                item={item}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
