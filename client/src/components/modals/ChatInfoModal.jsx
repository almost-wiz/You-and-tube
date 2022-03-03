export const ChatInfoModal = ({ setModal }) => {
  return (
    <>
      <div className="offcanvas-header py-4 py-lg-7 border-bottom">
        <button
          className="btn icon icon-lg text-muted"
          onClick={() => {setModal(false)}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div className="dropdown">
          <button className="btn icon icon-lg text-muted" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
          </button>

          <ul className="dropdown-menu">
            <li>
              <button className="btn dropdown-item d-flex align-items-center text-danger">
                Leave
                <div className="icon ms-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="offcanvas-body hide-scrollbar">
        <div className="text-center py-10">
          <div className="row gy-6">
            <div className="col-12">
              <div className="avatar avatar-xl mx-auto">
                <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
              </div>
            </div>

            <div className="col-12">
              <h4>Bootstrap Community</h4>
              <p>Bootstrap is an open source <br/> toolkit for developing web with <br/> HTML, CSS, and JS.</p>
            </div>
          </div>
        </div>

        <ul className="nav nav-pills nav-justified" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="pill" href="#offcanvas-group-tab-members">People</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="pill" href="#offcanvas-group-tab-media">Add</a>
          </li>
        </ul>

        <div className="tab-content py-2" role="tablist">
          <div className="tab-pane fade show active" id="offcanvas-group-tab-members" role="tabpanel">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar avatar-online">
                      <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                    </div>
                  </div>
                  <div className="col">
                    <h5><span>Michael Fuller</span></h5>
                    <p>online</p>
                  </div>
                  <div className="col-auto">
                    <span className="extra-small text-primary">owner</span>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar avatar-online">
                      <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                    </div>
                  </div>

                  <div className="col">
                    <h5><span>Mila White</span></h5>
                    <p>online</p>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown">
                      <button className="btn icon text-muted" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="btn dropdown-item d-flex align-items-center">
                            Make<br/>an owner
                            <div className="icon ms-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                            </div>
                          </button>
                        </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li>
                          <button className="btn dropdown-item d-flex align-items-center text-danger">
                            Delete
                            <div className="icon ms-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="tab-pane fade" id="offcanvas-group-tab-media" role="tabpanel">
            <div className="offcanvas-body hide-scrollbar py-0">
              <div className="border-bottom py-6">
                <form>
                  <div className="input-group">
                    <div className="input-group-text" id="search-user">
                      <div className="icon icon-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      </div>
                    </div>
                    <input type="text" className="form-control form-control-lg ps-0" placeholder="User name or phone" aria-label="User name or phone" aria-describedby="search-user"/>
                  </div>
                </form>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <small className="text-uppercase text-muted">B</small>
                </li>

                <li className="list-group-item">
                  <div className="row align-items-center gx-5">
                    <div className="col-auto">
                      <div className="avatar ">
                        <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                      </div>
                    </div>
                    <div className="col">
                      <h5>Bill Marrow</h5>
                      <p>last seen 3 days ago</p>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="id-add-user-user-1"/>
                        <label className="form-check-label" htmlFor="id-add-user-user-1"></label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="offcanvas-footer border-top py-4 py-lg-7">
              <button className="btn btn-lg btn-primary w-100 d-flex align-items-center">
                Add members
                <span className="icon ms-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
