import { Link } from '../../elements/Link'
import { VideoSearchBar } from '../../elements/VideoSearchBar'

export const Recommendations = () => {
  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <VideoSearchBar />

          <div className="chat-body hide-scrollbar flex-1 h-100">
            <div className="chat-body-inner">
              <div className="py-6 py-lg-12">
                <div className="row">

                  <div className="col-lg-4 d-lg-block">
                    <div className="card">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" className="card-img-top" alt="Preview"/>
                      <div className="card-body">
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                          <h5 className="card-title m-0">Card title</h5>
                          <Link className="card-text" to="/videos/authors/1">author</Link>
                        </div>
                        <p className="text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between align-items-center'>
                          <Link to="/watch?video=1">Watch...</Link>
                          <small className="text-muted">9 mins</small>
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
