import { Link } from "../Link";
import { useFetching } from "../../../hooks/useFetching";
import { LoadingDots } from "../Loading/LoadingDots";
import VideosService from "../../../API/VideosService";

export const SubscriptionCard = ({ item, subscriptions, setSubscriptions }) => {
  const [fetchUnsubscribe, isLoading, error] = useFetching(
    async (id) => await VideosService.unsubscribe(id)
  );

  const unsubscribe = () => {
    fetchUnsubscribe(item.author.id);
    if (!isLoading && !error) {
      setSubscriptions(subscriptions.filter((s) => s.id !== item.id));
    }
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-5">
      <div className="card">
        <div className="d-flex flex-column align-items-center">
          <div className="avatar avatar-xl m-5">
            <img height="82" width="82" src={item.author.avatar} alt="Logo" />
          </div>

          <Link
            className="h4 card-text"
            to={`/videos/authors/${item.author.id}`}
          >
            {item.author.username}
          </Link>
          <h5 className="text-muted">{item.subscribers_count} sub</h5>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-sm btn-danger"
              onClick={unsubscribe}
              disabled={isLoading ? true : false}
            >
              {isLoading ? <LoadingDots /> : <>Unsubscribe</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
