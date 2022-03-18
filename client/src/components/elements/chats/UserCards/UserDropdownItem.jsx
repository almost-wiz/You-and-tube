import { useContext } from "react";
import ChatsService from "../../../../API/ChatsService";
import { Context } from "../../../../context";
import { useFetching } from "../../../../hooks/useFetching";

export const UserCard = ({ chat, setChat, item }) => {
  const { store } = useContext(Context);

  const [fetchUpMember] = useFetching(async (chat, id) => {
    const response = await ChatsService.up_chat_member(chat, id);
    setChat({
      ...chat,
      creator: chat.members.find((i) => i.id === response.data.creator),
    });
  });

  const [fetchRemoveMember] = useFetching(async (chat, id) => {
    await ChatsService.remove_chat_member(chat, id);
    setChat({ ...chat, members: chat.members.filter((i) => i.id !== id) });
  });

  const upMember = () => {
    fetchUpMember(chat, item.id);
  };

  const removeMember = () => {
    fetchRemoveMember(chat, item.id);
  };

  return (
    <li className="list-group-item" key={item.id}>
      <div className="row align-items-center gx-5">
        <div className="col-auto">
          <div className="avatar">
            <img
              className="img-fluid"
              style={{ borderRadius: 100 }}
              src={item.avatar}
              alt=""
            />
          </div>
        </div>

        <div className="col">
          <h5>
            <span>{item.username}</span>
          </h5>
        </div>

        {!chat.isDuo &&
          !(chat.members.length === 2) &&
          (chat.creator.id === item.id ? (
            <div className="col-auto">
              <span className="extra-small text-primary">owner</span>
            </div>
          ) : (
            store.user.id === chat.creator.id && (
              <div className="col-auto">
                <div className="dropdown">
                  <button
                    className="btn icon text-muted"
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
                        className="btn dropdown-item d-flex align-items-center"
                        onClick={upMember}
                      >
                        Make
                        <br />
                        an owner
                        <div className="icon ms-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="feather feather-trending-up"
                          >
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                          </svg>
                        </div>
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="btn dropdown-item d-flex align-items-center text-danger"
                        onClick={removeMember}
                      >
                        Delete
                        <div className="icon ms-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )
          ))}
      </div>
    </li>
  );
};
