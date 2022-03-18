import React from "react";
import { MessagesHeader } from "./MessagesHeader";
import { MessagesList } from "./MessagesList";
import { MessagesSendForm } from "../../forms/MessagesSendForm";
import { ws_endpoint } from "../../../API";

export default class MessagesControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      newMessages: [],
      chat: props.chat,
      ticket: props.ticket,
      setChatInfoModal: props.setChatInfoModal,
      messageInputValue: "",
    };
    this.lastElement = React.createRef();
  }

  componentDidMount() {
    const endpoint = ws_endpoint(this.state.chat.id, this.state.ticket);
    const ws = new WebSocket(endpoint);

    ws.onmessage = (e) => {
      const BackEndData = JSON.parse(e.data);
      if (!BackEndData.message) return;
      let message = BackEndData.message;
      const user = this.state.chat.members?.find(
        (i) => i.id === message.author.id
      );
      message.author = user;
      if (message.author.id !== this.state.user.id) {
        this.notifyMe(message.author.username, message.text);
      }
      this.setState({
        ...this.state,
        newMessages: [...this.state.newMessages, message].sort((a, b) =>
          a.id > b.id ? 1 : -1
        ),
      });
      this.lastElement.current.scrollIntoView();
      this.setMessageInputValue("");
    };

    this.setState({ ...this.state, ws: ws });
  }

  notifyMe = (author, msg) => {
    new Notification(author, {
      body: msg,
    });
  };

  setMessageInputValue = (value) => {
    this.setState({ ...this.state, messageInputValue: value });
  };

  render() {
    return (
      <>
        <MessagesHeader
          chat={this.state.chat}
          setChatInfoModal={this.state.setChatInfoModal}
        />
        <MessagesList
          chat={this.state.chat}
          newMessages={this.state.newMessages}
          lastElement={this.lastElement}
        />
        <MessagesSendForm
          ws={this.state.ws}
          messageInputValue={this.state.messageInputValue}
          setMessageInputValue={this.setMessageInputValue}
        />
      </>
    );
  }
}
