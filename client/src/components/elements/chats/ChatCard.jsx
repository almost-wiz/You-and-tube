import { useContext } from "react";
import { Context } from "../../../context";
import { getMinimizedDate } from "../../../utils/date";
import { Link } from "../Link";

export const ChatCard = ({ item }) => {
  const { store } = useContext(Context);
  let user = {};
  if (item.members[0].id === store.user.id) {
    user = item.members[1];
  } else {
    user = item.members[0];
  }
  return (
    <Link to={`/messages?chat=${item.id}`} className="card border-0 text-reset">
      <div className="card-body">
        <div className="row gx-5">
          <div className="col-auto">
            <div className="avatar">
              <img
                className="img-fluid"
                style={{ borderRadius: 50 }}
                src={user.avatar}
                alt=""
              />
            </div>
          </div>

          <div className="col">
            <div className="d-flex align-items-center mb-3">
              <h5 className="me-auto mb-0">{item.display_title}</h5>
              {item.last_message && (
                <span className="text-muted extra-small ms-2">
                  {getMinimizedDate(item.last_message.datetime)}
                </span>
              )}
            </div>

            {item.last_message && (
              <div className="d-flex align-items-center">
                <div className="line-clamp me-auto">
                  {item.last_message.text}
                </div>

                {item.unread_count !== 0 && (
                  <div className="badge badge-circle bg-primary ms-5">
                    <span>{item.unread_count}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
