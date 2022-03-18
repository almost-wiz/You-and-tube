import { Link } from "../Link";
import { getMinimizedDate } from "../../../utils/date";
import { VideoNoPreview } from "../svg/VideoNoPreview";

export const VideoCard = ({ item, edit = false }) => {
  return (
    <div className="card">
      <Link to={`/watch?video=${item.id}`} className="text-center">
        {item.preview ? (
          <img
            src={item.preview}
            className="img-fluid rounded"
            style={{ maxHeight: "40vh" }}
            alt=""
          />
        ) : (
          <VideoNoPreview />
        )}
      </Link>

      <div className="card-body">
        <div className="d-flex flex-column  mb-3">
          <Link to={`/watch?video=${item.id}`}>
            <h5 className="card-title text-truncate m-0 mb-3">{item.title}</h5>
          </Link>
          <Link
            className="card-text text-truncate"
            to={`/videos/authors/${item.author.id}`}
          >
            {item.author.username}
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          {edit ? (
            <Link
              to={`/videos/author-panel/edit?video=${item.id}`}
              className="text-warning"
            >
              Edit...
            </Link>
          ) : (
            <></>
          )}
          <small className="text-muted">
            {getMinimizedDate(item.datetime)}
          </small>
        </div>
      </div>
    </div>
  );
};
