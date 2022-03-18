import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const MessagesSendForm = ({
  ws,
  messageInputValue,
  setMessageInputValue,
}) => {
  const messageInput = useRef();

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) sendMessage(e);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.current?.value) return;
    ws.send(JSON.stringify({ message: messageInput.current.value }));
    setMessageInputValue("");
    messageInput.current.focus();
  };

  return (
    <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
      <form className="chat-form rounded-pill bg-dark" onSubmit={sendMessage}>
        <div className="row align-items-center gx-0">
          <div className="col px-5">
            <div className="input-group">
              <TextareaAutosize
                autoFocus
                onKeyDown={onKeyDown}
                ref={messageInput}
                value={messageInputValue}
                onChange={(e) => setMessageInputValue(e.target.value)}
                className="form-control px-0"
                placeholder="Type your message..."
                style={{ overflow: "hidden" }}
                required
              />
            </div>
          </div>
          <div className="col-auto">
            <button className="btn btn-icon btn-primary rounded-circle ms-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="feather feather-send"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
