import { useRef } from "react";
import { useObserver } from "../../../hooks/useObserver";
import { LoadingDots } from "../Loading/LoadingDots";
import { VideoCard } from "./VideoCard";

export const VideosList = ({
  page,
  setPage,
  totalPages,
  videos,
  isLoading,
  error,
  isEditable = false,
}) => {
  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  return (
    <div className="container h-100 hide-scrollbar">
      {!videos.length && !isLoading && !error && (
        <div className="d-flex flex-column justify-content-center text-center">
          <p className="text-muted">There are no no videos here...</p>
        </div>
      )}
      {isLoading && (
        <div className="d-flex flex-column justify-content-center text-center">
          <LoadingDots size={60} />
        </div>
      )}
      {error && (
        <div className="d-flex flex-column justify-content-center text-center">
          <p className="text-muted">Server error, try later...</p>
        </div>
      )}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {videos.map((item) => (
          <VideoCard item={item} edit={isEditable} key={item.id} />
        ))}
        <div ref={lastElement} style={{ height: 20 }}></div>
      </div>
    </div>
  );
};
