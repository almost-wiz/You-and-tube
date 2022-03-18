import { useEffect, useRef, useState } from "react";
import VideosService from "../../../API/VideosService";
import { useFetching } from "../../../hooks/useFetching";
import { useObserver } from "../../../hooks/useObserver";
import { getPageCount } from "../../../utils/pages";
import { LoadingDots } from "../../elements/Loading/LoadingDots";
import { SubscriptionCard } from "../../elements/videos/SubscriptionCard";
import { VideoHeader } from "../../elements/videos/VideoHeader";

export const Subscriptions = () => {
  const lastElement = useRef();

  const [subscriptions, setSubscriptions] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [fetchSubscriptions, isLoading, error] = useFetching(async (params) => {
    const response = await VideosService.get_subscriptions(params);
    setSubscriptions([...subscriptions, ...response.data.results]);
    setTotalPages(getPageCount(response.data.count, 20));
  });

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchSubscriptions({ page: page });
  }, [page]);

  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <VideoHeader />
          <div className="chat-body hide-scrollbar flex-1 h-100">
            <div className="chat-body-inner">
              <div className="py-6 py-lg-12">
                <div className="row">
                  {subscriptions.length &&
                    subscriptions.map((item) => (
                      <SubscriptionCard
                        item={item}
                        subscriptions={subscriptions}
                        setSubscriptions={setSubscriptions}
                        key={item.id}
                      />
                    ))}
                  <div ref={lastElement} style={{ height: 20 }}></div>
                </div>
              </div>
            </div>
            {isLoading && (
              <div className="d-flex flex-column justify-content-center text-center">
                <LoadingDots size={60} />
              </div>
            )}
            {error && (
              <div className="d-flex flex-column justify-content-center text-center">
                <p className="text-muted">You are not following anyone...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
