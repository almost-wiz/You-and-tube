import { useEffect, useState } from "react";
import { VideoSearchBar } from "../../elements/videos/VideoSearchBar";
import { useFetching } from "../../../hooks/useFetching";
import { VideosList } from "../../elements/videos/VideosList";
import { getPageCount } from "../../../utils/pages";
import VideosService from "../../../API/VideosService";

export const Recommendations = () => {
  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [fetchVideos, isLoading, error] = useFetching(
    async (params) => {
      const response = await VideosService.get_videos(params);
      setVideos([...videos, ...response.data.results]);
      setTotalPages(getPageCount(response.data.count, 20));
    }
  );

  useEffect(() => {
    fetchVideos({ page: page });
  }, [page]);

  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <VideoSearchBar setVideos={setVideos} />
          <VideosList
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            videos={videos}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </main>
  );
};
