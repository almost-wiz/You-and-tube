import React, { useContext, useEffect, useState } from "react";
import { ChatInfoModal } from "../modals/ChatInfoModal";
import { ModalCascade } from "../modals/ModalCascade";
import { Context } from "../../context";
import { useFetching } from "../../hooks/useFetching";
import { useLocation, useParams } from "react-router";
import { Error } from "../elements/Error";
import { LoadingPage } from "../elements/Loading/LoadingPage";
import ChatsService from "../../API/ChatsService";
import MessagesControl from "../elements/chats/MessagesControl";

export const Messages = () => {
  const { store } = useContext(Context);

  const [chatInfoModal, setChatInfoModal] = useState(false);

  let { c_id } = useParams();
  const urlParams = new URLSearchParams(useLocation().search);
  if (!c_id) {
    c_id = urlParams.get("chat");
  }

  const [chat, setChat] = useState({});

  const [fetchChat, isChatLoading, chatError] = useFetching(async (id) => {
    const response = await ChatsService.get_chat(id);
    setChat(response.data);
  });

  const [ticket, setTicket] = useState(null);

  const [fetchTicket] = useFetching(async () => {
    const response = await ChatsService.get_chat_ticket();
    setTicket(response.data.ticket_uuid);
  });

  useEffect(() => {
    fetchTicket();
    if (c_id) fetchChat(c_id);
  }, [c_id]);

  if (isChatLoading) {
    return (
      <main className="main is-visible">
        <LoadingPage />
      </main>
    );
  } else if (
    !c_id ||
    chatError ||
    !chat.members?.find((i) => i.id === store.user.id)
  ) {
    return (
      <main className="main is-visible">
        <Error />
      </main>
    );
  }

  return (
    <>
      <main className="main is-visible">
        <div className="container h-100">
          <div className="d-flex flex-column h-100 position-relative">
            <MessagesControl
              user={store.user}
              ticket={ticket}
              chat={chat}
              setChatInfoModal={setChatInfoModal}
            />
          </div>
        </div>
      </main>

      {chatInfoModal && (
        <ModalCascade
          Children={ChatInfoModal}
          setModal={setChatInfoModal}
          data={{ chat, setChat }}
        />
      )}
    </>
  );
};
