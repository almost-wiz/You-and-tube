import { Link } from "../Link";
import { useContext, useEffect, useRef, useState } from "react";
import { useFetching } from "../../../hooks/useFetching";
import { LoadingDots } from "../Loading/LoadingDots";
import { getMinimizedDate } from "../../../utils/date";
import { getPageCount } from "../../../utils/pages";
import { useObserver } from "../../../hooks/useObserver";
import VideosService from "../../../API/VideosService";
import { Context } from "../../../context";

export const CommentsBlock = ({ v_id }) => {
  const { store } = useContext(Context);
  const lastElement = useRef();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [fetchAddComments, isCommentLoading] = useFetching(
    async (v_id, params) => {
      const response = await VideosService.add_comment(v_id, params);
      setComments([
        {
          ...response.data,
          author: store.user,
        },
        ...comments,
      ]);
      setComment("");
    }
  );

  const [fetchComments, isLoading, error] = useFetching(
    async (v_id, params) => {
      const response = await VideosService.get_comments(v_id, params);
      setComments([...comments, ...response.data.results]);
      setTotalPages(getPageCount(response.data.count, 20));
    }
  );

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    if (v_id) {
      fetchComments(v_id, { page });
    }
  }, [v_id, page]);

  const addComment = (e) => {
    e.preventDefault();
    if (comment.length) {
      fetchAddComments(v_id, { text: comment });
    }
  };

  return (
    <>
      <form className="row align-items-center" onSubmit={addComment}>
        <div className="col px-5">
          <div className="input-group">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-control "
              placeholder="Type your comment..."
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
              disabled={isCommentLoading ? true : false}
            >
              {isCommentLoading ? (
                <LoadingDots />
              ) : (
                <>
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </>
              )}
            </svg>
          </button>
        </div>
      </form>
      <div className="container my-5 py-5 text-dark">
        <div className="row d-flex justify-content-center">
          {comments.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body px-0">
                <div className="d-flex flex-start">
                  <Link to={`/videos/authors/${item.author?.id}`}>
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src={item.author?.avatar}
                      alt="avatar"
                      width="40"
                      height="40"
                    />
                  </Link>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="text-primary fw-bold mb-0">
                        <Link
                          to={`/videos/authors/${item.author?.id}`}
                          className="text-primary"
                        >
                          {item.author?.username}
                        </Link>
                        <span className="text-dark ms-2">{item.text}</span>
                      </h6>
                      <p className="mb-0">{getMinimizedDate(item.datetime)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!comments.length && !isLoading && !error && (
            <div className="d-flex flex-column h-100 justify-content-center text-center">
              <p className="text-muted">There are no no comments here...</p>
            </div>
          )}
          {isLoading && (
            <div className="d-flex flex-column h-100 justify-content-center text-center">
              <LoadingDots size={60} />
            </div>
          )}
          {error && (
            <div className="d-flex flex-column h-100 justify-content-center text-center">
              <p className="text-muted">Server error, try later...</p>
            </div>
          )}
          <div ref={lastElement} style={{ height: 20 }}></div>
        </div>
      </div>
    </>
  );
};
