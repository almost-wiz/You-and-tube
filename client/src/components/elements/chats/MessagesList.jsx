import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../context";
import { useFetching } from "../../../hooks/useFetching";
import { LoadingDots } from "../Loading/LoadingDots";
import { MessageIn } from "./MessageCards/MessageIn";
import { MessageOut } from "./MessageCards/MessageOut";
import ChatsService from "../../../API/ChatsService";

export const MessagesList = ({ chat, newMessages, lastElement }) => {
  const { store } = useContext(Context);

  const firstElement = useRef();
  const [messages, setMessages] = useState([]);

  const [fetchMessages, isLoading, error, success] = useFetching(async (id) => {
    const response = await ChatsService.get_messages(id);
    setMessages(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    lastElement.current.scrollIntoView();
  });

  const [fetchMarkMessagesRead] = useFetching(async (id) => {
    await ChatsService.mark_message_read(id);
  });

  useEffect(() => {
    if (chat.id) {
      fetchMessages(chat.id);
      fetchMarkMessagesRead(chat.id);
    }
  }, [chat.id]);

  return (
    <div className="chat-body hide-scrollbar flex-1 h-100">
      <div className="chat-body-inner">
        <div className="py-6 py-lg-12">
          <div ref={firstElement} style={{ height: 20 }}></div>
          {messages.map((item) =>
            item.author.id === store.user.id ? (
              <MessageOut item={item} key={item.id} />
            ) : (
              <MessageIn item={item} key={item.id} />
            )
          )}
          {newMessages.map((item) =>
            item.author.id === store.user.id ? (
              <MessageOut item={item} key={item.id} />
            ) : (
              <MessageIn item={item} key={item.id} />
            )
          )}
          {!messages.length && success && (
            <p className="text-center">You haven't any messages here. </p>
          )}
          {isLoading && (
            <p className="text-center">
              <LoadingDots />
            </p>
          )}
          {error && (
            <p className="text-center">Server error, try again later</p>
          )}
          <div ref={lastElement} style={{ height: 200 }}></div>
        </div>
      </div>
    </div>
  );
};
