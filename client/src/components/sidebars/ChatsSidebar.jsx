import { Link } from '../elements/Link'

export const ChatsSidebar = () => {
  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100">
        <div className="d-flex flex-column h-100 position-relative">
            <div className="hide-scrollbar">

                <div className="container py-8">

                    <div className="mb-8">
                        <h2 className="fw-bold m-0">Chats</h2>
                    </div>

                    <div className="mb-6">
                        <form>
                            <div className="input-group">
                                <div className="input-group-text">
                                    <div className="icon icon-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                </div>

                                <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages" aria-label="Search for messages..."/>
                            </div>


                            <div className="mt-5">
                                <button className="btn btn-lg btn-primary w-100 d-flex align-items-center">
                                    Find
                                    <span className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className="card-list">

                        <Link to='/messages?c=1' className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar">
                                            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">William Wright</h5>
                                            <span className="text-muted extra-small ms-2">12:45 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.
                                            </div>

                                            <div className="badge badge-circle bg-primary ms-5">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="row align-items-center gx-4">
                                    <div className="col-auto">
                                        <div className="avatar avatar-xs">
                                            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <h6 className="mb-0">Bootstrap Community</h6>
                                    </div>

                                    <div className="col-auto">
                                        <div className="avatar-group">
                                            <div className="avatar avatar-xs">
                                                <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                                            </div>

                                            <div className="avatar avatar-xs">
                                                <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                                            </div>

                                            <div className="avatar avatar-xs">
                                                <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                                            </div>

                                            <div className="avatar avatar-xs">
                                                <span className="avatar-text">+5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/messages?c=1' className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar">
                                            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Ollie Chandler</h5>
                                            <span className="text-muted extra-small ms-2">08:45 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet friend of mine at the departments stores now.
                                            </div>

                                            <div className="badge badge-circle bg-primary ms-5">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/messages?c=1' className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar">
                                            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Elise Dennis</h5>
                                            <span className="text-muted extra-small ms-2">08:35 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                is typing<span className='typing-dots'><span>.</span><span>.</span><span>.</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar">
                                            <svg className="avatar-img placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                <title>Placeholder</title>
                                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="placeholder-glow  w-100  mb-0">
                                                <span className="placeholder col-5"></span>
                                            </h5>
                                        </div>

                                        <div className="placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-8"></span>
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
    </aside>
  )
}
