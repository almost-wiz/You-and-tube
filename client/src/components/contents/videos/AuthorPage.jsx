import { Link } from '../../elements/Link'
import { VideoSearchBar } from '../../elements/VideoSearchBar'

export const AuthorPage = () => {
  return (
    <main className="main is-visible hide-scrollbar">
      <div className="container">
        <div className="d-flex flex-column position-relative">
          <VideoSearchBar />
          <div className="row py-5 py-lg-13 py-md-10 text-center">
            <div className="col-lg-6 col-md-8 mx-auto">
              <img width='90' height='90' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
              <h1 className="fw-light">Album example</h1>
              <p className="lead text-muted">4.7m subscribers</p>
              <p>
                <button className="btn btn-primary my-2">Subscribe(unsubscribe)</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

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
    </main>
  )
}
