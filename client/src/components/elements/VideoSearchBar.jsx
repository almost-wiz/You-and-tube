import { Link } from './Link'

export const VideoSearchBar = () => {
  return (
    <div className="chat-header border-bottom py-4 py-lg-7 row">
      <div className="col-2 p-0 d-xl-none d-flex flex-row align-items-center">
        <Link to='/videos' force='true' className="btn btn-icon btn-primary rounded-circle ms-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </Link>
      </div>
      <form className="col-10 col-xl chat-form rounded-pill bg-dark">
        <div className="row align-items-center gx-0">
          <div className="col px-5">
            <div className="input-group">
              <input className="form-control px-0" placeholder="Type your search query..." />
            </div>
          </div>
          <div className="col-auto">
            <button className="btn btn-icon btn-primary rounded-circle ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
