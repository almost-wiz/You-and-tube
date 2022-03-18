import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context";
import { useFetching } from "../../../hooks/useFetching";
import { Link } from "../../elements/Link";
import { VideoHeader } from "../../elements/videos/VideoHeader";
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  PlaybackRateMenuButton,
} from "video-react";
import { useLocation } from "react-router";
import { Error } from "../../elements/Error";
import { toPrettyDate } from "../../../utils/date";
import { getMinimizedNum } from "../../../utils/nums";
import { LoadingPage } from "../../elements/Loading/LoadingPage";
import { LoadingDots } from "../../elements/Loading/LoadingDots";
import { CommentsBlock } from "../../elements/videos/CommentsBlock";
import VideosService from "../../../API/VideosService";

export const Video = () => {
  const { store } = useContext(Context);

  const urlParams = new URLSearchParams(useLocation().search);
  const v_id = urlParams.get("video");

  const [video, setVideo] = useState({});

  const [fetchAddView] = useFetching(
    async (id) => await VideosService.add_view(id)
  );

  const [fetchVideo, isLoading, error] = useFetching(async (id) => {
    const response = await store.get_video(id);
    setVideo(response.data);
  });

  const [fetchSubscribe, isSubLoading, SubError] = useFetching(
    async (id) => await VideosService.subscribe(id)
  );
  const [fetchUnsubscribe, isUnsubLoading, UnsubError] = useFetching(
    async (id) => await VideosService.unsubscribe(id)
  );

  useEffect(() => {
    if (v_id) {
      fetchVideo(v_id);
      fetchAddView(v_id);
    }
  }, [v_id]);

  if (!v_id || error) {
    return (
      <main className="main is-visible">
        <Error />
      </main>
    );
  } else if (isLoading) {
    return (
      <main className="main is-visible">
        <LoadingPage />
      </main>
    );
  }

  const subscribe = () => {
    fetchSubscribe(video.author.id);
    if (!isSubLoading && !SubError) {
      setVideo({
        ...video,
        author: {
          ...video.author,
          is_subscribed: true,
          subscribers_count: video.author.subscribers_count + 1,
        },
      });
    }
  };

  const unsubscribe = () => {
    fetchUnsubscribe(video.author.id);
    if (!isUnsubLoading && !UnsubError) {
      setVideo({
        ...video,
        author: {
          ...video.author,
          is_subscribed: false,
          subscribers_count: video.author.subscribers_count - 1,
        },
      });
    }
  };

  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <VideoHeader />

          <div className="chat-body hide-scrollbar flex-1 h-100">
            <div className="chat-body-inner">
              <div className="card mt-5">
                <Player
                  playsInline
                  src={video.file}
                  preload="auto"
                  aspectRatio="16:9"
                  autoPlay
                >
                  <BigPlayButton position="center" />
                  <LoadingSpinner />
                  <ControlBar>
                    <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5, 0.25]} />
                  </ControlBar>
                </Player>
                <div className="card-body">
                  <span className="card-title">{video.tags}</span>
                  <h2 className="card-title">{video.title}</h2>
                  <h6 className="text-muted">
                    {getMinimizedNum(video.views)} views •{" "}
                    {toPrettyDate(video.datetime)}
                  </h6>

                  <hr />
                  <div className="row">
                    <div className="col-10 col-lg row align-items-center gx-5">
                      <Link
                        to={`/videos/authors/${video?.author?.id}`}
                        className="avatar mx-5"
                      >
                        <img
                          style={{ borderRadius: 50 }}
                          src={video?.author?.avatar}
                          alt="Logo"
                        />
                      </Link>
                      <div className="col overflow-hidden">
                        <Link to={`/videos/authors/${video?.author?.id}`}>
                          <h4 className="card-title">
                            {video?.author?.username}
                          </h4>
                        </Link>
                        <p className="text-truncate">
                          {getMinimizedNum(video?.author?.subscribers_count)}{" "}
                          subscribers
                        </p>
                      </div>
                    </div>
                    <div className="col-2 col-lg d-flex flex-column align-items-end">
                      {store.user.id !== video.author?.id &&
                        (video?.author?.is_subscribed ? (
                          <button
                            className="btn btn-secondary my-2"
                            onClick={unsubscribe}
                            disabled={isUnsubLoading ? true : false}
                          >
                            {isUnsubLoading ? (
                              <LoadingDots />
                            ) : (
                              <>Unsubscribe</>
                            )}
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
                    </div>
                  </div>

                  <hr />

                  <h6 className="card-text mt-5">{video.description}</h6>

                  <hr />

                  <CommentsBlock v_id={v_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
