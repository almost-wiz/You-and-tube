import { getMinimizedDate } from "../../../utils/date";
import { Link } from "../Link";
import { GroupChatAvatar } from "../svg/GroupChatAvatar";

export const GroupChatCard = ({ item }) => {
  return (
    <Link to={`/messages?chat=${item.id}`} className="card border-0 text-reset">
      {item.last_message ? (
        <>
          <div className="card-body">
            <div className="row gx-5">
              <div className="col-auto">
                <div className="avatar">
                  <img
                    className="img-fluid"
                    style={{ borderRadius: 50 }}
                    src={item.last_message?.author.avatar}
                    alt=""
                  />
                </div>
              </div>

              <div className="col">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="me-auto mb-0">
                    {item.last_message?.author.username}
                  </h5>
                  <span className="text-muted extra-small ms-2">
                    {getMinimizedDate(item.last_message?.datetime)}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="line-clamp me-auto">
                    {item.last_message?.text}
                  </div>

                  {item.unread_count !== 0 && (
                    <div className="badge badge-circle bg-primary ms-5">
                      <span>{item.unread_count}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row align-items-center gx-4">
              <div className="col-auto">
                <div className="avatar avatar-xs">
                  <GroupChatAvatar />
                </div>
              </div>

              <div className="col">
                <h6 className="mb-0">{item.display_title}</h6>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="card-body">
          <div className="row gx-5">
            <div className="col-auto">
              <div className="avatar">
                <GroupChatAvatar />
              </div>
            </div>

            <div className="col">
              <div className="d-flex align-items-center mb-3">
                <h5 className="me-auto mb-0">{item.display_title}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};
