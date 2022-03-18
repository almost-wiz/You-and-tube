import { getMinimizedDate } from "../../../../utils/date";

export const MessageIn = ({ item }) => {
  return (
    <div className="message">
      <span className="avatar avatar-responsive">
        <img src={item.author.avatar} className="img-fluid" alt="" style={{borderRadius: 100}} />
      </span>

      <div className="message-inner">
        <div className="message-body">
          <div className="message-content">
            <div className="message-text">
              <p style={{overflowWrap: 'break-word'}}>{item.text}</p>
            </div>
          </div>
        </div>

        <div className="message-footer">
          <span className="extra-small text-muted">{getMinimizedDate(item.datetime)}</span>
        </div>
      </div>
    </div>
  );
};
