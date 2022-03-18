import { useContext, useRef, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { UserCheckboxItem } from "../elements/chats/UserCards/UserCheckboxItem";
import BaseService from "../../API/BaseService";
import ChatsService from "../../API/ChatsService";
import { LoadingDots } from "../elements/Loading/LoadingDots";
import { Context } from "../../context";

export const SearchUsersForm = ({ title, description }) => {
  const { store } = useContext(Context);

  const searchInput = useRef();

  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const [fetchUsers] = useFetching(async (search) => {
    const response = await BaseService.search_users(search);
    setMembers(response.data.results.filter((i) => i.id !== store.user.id));
  });

  const [fetchStartChat, isLoading, error, success] = useFetching(
    async (params) => {
      await ChatsService.start_chat(params);
    }
  );

  const search = () => {
    if (searchInput.current?.value) fetchUsers(searchInput.current.value);
  };

  const startChat = () => {
    fetchStartChat({
      title: title.current?.value,
      description: description.current?.value,
      members: selectedMembers.map((i) => i.id),
    });
  };

  return (
    <div
      className="tab-pane fade"
      id="offcanvas-group-tab-search"
      role="tabpanel"
    >
      <input
        type="text"
        onChange={search}
        ref={searchInput}
        className="input-group-text w-100"
        placeholder="Search users..."
      />
      <nav>
        {members.map((item) => (
          <UserCheckboxItem
            item={item}
            selectedMembers={selectedMembers}
            setSelectedMembers={setSelectedMembers}
            key={item.id}
          />
        ))}
      </nav>
      {error && (
        <p className="text-center text-danger">
          Server error, try again latter.
        </p>
      )}
      {success && (
        <p className="text-center text-success">
          You created chat successfully. Now you can find it in your chats.
        </p>
      )}
      {Boolean(selectedMembers.length) && !error && !success && (
        <div className="container mt-5 mb-8 position-relative">
          <button
            className="btn btn-lg btn-primary w-100 d-flex align-items-center"
            type="button"
            onClick={startChat}
            disabled={isLoading ? true : false}
          >
            {isLoading ? <LoadingDots /> : "Start chat"}
            <span className="icon ms-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
