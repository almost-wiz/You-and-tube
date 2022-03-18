import { useEffect, useRef, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { ChatCard } from "../elements/chats/ChatCard";
import { GroupChatCard } from "../elements/chats/GroupChatCard";
import { LoadingDots } from "../elements/Loading/LoadingDots";
import { getPageCount } from "../../utils/pages";
import { useObserver } from "../../hooks/useObserver";
import ChatsService from "../../API/ChatsService";

export const ChatsSidebar = () => {
  const lastElement = useRef();
  const title = useRef();

  const [chats, setChats] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [fetchChats, isLoading, error] = useFetching(
    async (params, search = false) => {
      const response = await ChatsService.get_chats(params);
      if (search) {
        setChats(response.data.results);
      } else {
        setChats([...chats, ...response.data.results]);
      }
      setTotalPages(getPageCount(response.data.count, 20));
    }
  );

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchChats({ page: page });
  }, [page]);

  const search = (e) => {
    e.preventDefault();
    if (title.current.value) {
      fetchChats({ page: page, q: title.current.value }, true);
    }
  }

  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <div className="hide-scrollbar">
            <div className="container py-8">
              <div className="mb-8">
                <h2 className="fw-bold m-0">Chats</h2>
              </div>

              <div className="mb-6">
                <form onSubmit={search}>
                  <div className="input-group">
                    <div className="input-group-text">
                      <div className="icon icon-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      </div>
                    </div>

                    <input
                      ref={title}
                      type="text"
                      className="form-control form-control-lg ps-0"
                      placeholder="Search chats"
                      required
                    />
                  </div>
                  <button className="btn btn-lg btn-primary my-5 w-100 d-flex align-items-center">
                    Search
                    <span className="icon ms-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    </span>
                  </button>
                </form>
              </div>

              <div className="card-list">
                {chats.map((item) =>
                  item.isDuo ? (
                    <ChatCard item={item} key={item.id} />
                  ) : (
                    <GroupChatCard item={item} key={item.id} />
                  )
                )}
                <div ref={lastElement} style={{ height: 20 }}></div>
                {isLoading && (
                  <div className="d-flex flex-column justify-content-center text-center">
                    <LoadingDots size={60} />
                  </div>
                )}
                {error && (
                  <div className="d-flex flex-column justify-content-center text-center">
                    <p className="text-muted">
                      You are not a member of any of the chats...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
