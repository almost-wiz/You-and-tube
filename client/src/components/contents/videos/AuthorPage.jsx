import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import VideosService from "../../../API/VideosService";
import { Context } from "../../../context";
import { useFetching } from "../../../hooks/useFetching";
import { getPageCount } from "../../../utils/pages";
import { Error } from "../../elements/Error";
import { LoadingDots } from "../../elements/Loading/LoadingDots";
import { VideoHeader } from "../../elements/videos/VideoHeader";
import { VideosList } from "../../elements/videos/VideosList";

export const AuthorPage = () => {
  const { store } = useContext(Context);

  const queryParams = useParams();
  const [author, setAuthor] = useState({});

  const [fetchAuthor, isLoading, error] = useFetching(async (id) => {
    const response = await store.get_user(id);
    setAuthor(response.data);
  });

  const [fetchSubscribe, isSubLoading, SubError] = useFetching(
    async (id) => await VideosService.subscribe(id)
  );
  const [fetchUnsubscribe, isUnsubLoading, UnsubError] = useFetching(
    async (id) => await VideosService.unsubscribe(id)
  );

  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [fetchVideos, isVideosLoading, videosError] = useFetching(
    async (params) => {
      const response = await VideosService.get_videos(params);
      setVideos([...videos, ...response.data.results]);
      setTotalPages(getPageCount(response.data.count, 20));
    }
  );

  useEffect(() => {
    fetchAuthor(queryParams["id"]);
    if (author.id) {
      fetchVideos({ author: author.id, page: page });
    }
  }, [author.id, page]);

  const subscribe = () => {
    fetchSubscribe(author.id);
    if (!isSubLoading && !SubError) {
      setAuthor({
        ...author,
        is_subscribed: true,
        subscribers_count: author.subscribers_count + 1,
      });
    }
  };

  const unsubscribe = () => {
    fetchUnsubscribe(author.id);
    if (!isUnsubLoading && !UnsubError) {
      setAuthor({
        ...author,
        is_subscribed: false,
        subscribers_count: author.subscribers_count - 1,
      });
    }
  };

  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <VideoHeader />
          {isLoading ? (
            <LoadingDots />
          ) : error ? (
            <Error />
          ) : (
            <div className="row py-5 py-lg-15 py-md-10 text-center">
              <div className="col-lg-6 col-md-8 mx-auto">
                <img
                  style={{ borderRadius: 100 }}
                  width="90"
                  height="90"
                  src={author.avatar}
                  alt="Logo"
                />
                <h1 className="fw-light">{author.username}</h1>
                <p className="lead text-muted">
                  {author.subscribers_count} sub
                </p>
                <p>
                  {store.user.id !== author.id &&
                    (author.is_subscribed ? (
                      <button
                        className="btn btn-secondary my-2"
                        onClick={unsubscribe}
                        disabled={isUnsubLoading ? true : false}
                      >
                        {isUnsubLoading ? <LoadingDots /> : <>Unsubscribe</>}
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger my-2"
                        onClick={subscribe}
                        disabled={isLoading ? true : false}
                      >
                        {isLoading ? <LoadingDots /> : <>Subscribe</>}
                      </button>
                    ))}
                </p>
              </div>
            </div>
          )}

          <hr />

          <VideosList
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            videos={videos}
            isLoading={isVideosLoading}
            error={videosError}
          />
        </div>
      </div>
    </main>
  );
};
