import { Link } from '../../elements/Link'

export const AuthorPanel = () => {
  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <div className="chat-header border-bottom py-4 py-lg-7">
            <div className="row align-items-center">
              <div className="col-2 p-0 my-5 d-xl-none d-flex flex-row align-items-center">
                <Link to='/videos' className="btn btn-icon btn-primary rounded-circle ms-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </Link>
              </div>
              <div className="col col-sm-6 col-xl-10">
                <h1 className="text-truncate m-0">Author's Panel</h1>
              </div>
              <div className="col col-sm-4 col-xl-2">
                <div className="row align-items-center gx-6">
                  <Link
                    to="/videos/author-panel/new"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    Create
                    <span className="icon ms-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.2 490.2" fill="white" stroke="currentColor" strokeWidth="30"><g><g><path d="M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z"/><path d="M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="chat-body hide-scrollbar flex-1 h-100">
            <div className="chat-body-inner">
              <div className="py-6 py-lg-12">

                <div className='row flex-column-reverse flex-xl-row flex-md-row flex-sm-row'>
                  <div className='col'>
                    <div className="card text-white bg-secondary mb-3 mx-5 px-10 text-center">
                      <div className="card-header">Subscribers</div>
                      <div className="card-body">
                        <p className="card-title m-0" style={{fontSize: '50px'}}>4.7</p>
                        <h4 className="card-title" style={{marginTop: '-20px'}}>million</h4>
                      </div>
                    </div>

                    <div className="card text-white bg-secondary mb-3 mx-5 px-10 text-center">
                      <div className="card-header">Total views</div>
                      <div className="card-body">
                        <p className="card-title m-0" style={{fontSize: '50px'}}>762</p>
                        <h4 className="card-title" style={{marginTop: '-20px'}}>million</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col mb-10 my-xl-auto my-md-auto my-sm-auto'>
                    <div className="px-auto text-center">
                      <img width='90' height='90' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                      <h1 className="fw-light">Album example</h1>
                      <h3 className="text-muted">example@domain.com</h3>
                      <h3 className="text-muted">+12345678910</h3>
                      <Link to="/settings">Settings</Link>
                    </div>
                  </div>
                </div>

              </div>

              <div className='text-center'>
                <h2>Manage your videos</h2>
                <hr/>
              </div>

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
                            <Link to="/videos/author-panel/edit?video=1" className="text-warning">Edit...</Link>
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
      </div>
    </main>
  )
}
