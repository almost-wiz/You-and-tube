import { Link } from '../../elements/Link'
import { VideoSearchBar } from '../../elements/VideoSearchBar'

export const Subscriptions = () => {
  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <VideoSearchBar />

          <div className="chat-body hide-scrollbar flex-1 h-100">
            <div className="chat-body-inner">
              <div className="py-6 py-lg-12">
                <div className="row">

                  <div className="col-lg-3 col-md-4 col-sm-6 my-5">
                    <div className="card">
                      <div className="d-flex flex-column align-items-center">
                        <div className="avatar avatar-xl m-5">
                          <img height='82' width='82' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                        </div>

                        <Link className="h4 card-text" to="/videos/authors/1">William Wright</Link>
                        <h5 className="text-muted">4.7m subscribers</h5>
                      </div>
                      <div className="card-body">
                        <div className='d-flex justify-content-center'>
                          <button className="btn btn-sm btn-danger">Unsubscribe</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
