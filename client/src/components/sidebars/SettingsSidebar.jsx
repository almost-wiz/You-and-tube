export const SettingsSidebar = () => {
  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100">
          <div className="d-flex flex-column h-100">
            <div className="hide-scrollbar">
                <div className="container py-8">

                    <div className="mb-8">
                        <h2 className="fw-bold m-0">Settings</h2>
                    </div>

                    <div className="card border-0">
                        <div className="card-body">
                            <div className="row align-items-center gx-5">
                                <div className="col-auto">
                                    <div className="avatar">
                                        <img className="avatar-img" src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="" />

                                        <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        </div>
                                        <input id="upload-profile-photo" className="d-none" type="file"/>
                                        <label className="stretched-label mb-0" htmlFor="upload-profile-photo" style={{cursor: 'pointer'}}></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <h5>William Pearson</h5>
                                    <p>wright@studio.com</p>
                                </div>
                                <div className="col-auto">
                                    <button className="btn text-muted ">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="d-flex align-items-center mb-4 px-6">
                            <small className="text-muted me-auto">Account</small>
                        </div>

                        <div className="card border-0">
                            <div className="card-body py-2">

                                <div className="accordion accordion-flush" id="accordion-profile">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accordion-profile-1">
                                            <span className="accordion-button text-reset show collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-1" aria-expanded="false" aria-controls="accordion-profile-body-1">
                                                <div>
                                                    <h5>Profile settings</h5>
                                                    <p>Change your profile settings</p>
                                                </div>
                                            </span>
                                        </div>

                                        <div id="accordion-profile-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-profile-1" data-parent="#accordion-profile">
                                            <div className="accordion-body">
                                                <div className="form-floating mb-6">
                                                    <input type="text" className="form-control" id="profile-name" placeholder="Name"/>
                                                    <label htmlFor="profile-name">Name</label>
                                                </div>

                                                <div className="form-floating mb-6">
                                                    <input type="email" className="form-control" id="profile-email" placeholder="Email address"/>
                                                    <label htmlFor="profile-email">Email</label>
                                                </div>

                                                <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="d-flex align-items-center my-4 px-6">
                            <small className="text-muted me-auto">Security</small>
                        </div>

                        <div className="card border-0">
                            <div className="card-body py-2">

                                <div className="accordion accordion-flush" id="accordion-security">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accordion-security-1">
                                            <span className="accordion-button text-reset show collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-security-body-1" aria-expanded="false" aria-controls="accordion-security-body-1">
                                                <div>
                                                    <h5>Password</h5>
                                                    <p>Change your password</p>
                                                </div>
                                            </span>
                                        </div>

                                        <div id="accordion-security-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-security-1" data-parent="#accordion-security">
                                            <div className="accordion-body">
                                                <form action="#" autoComplete="on">
                                                    <div className="form-floating mb-6">
                                                        <input type="password" className="form-control" id="profile-current-password" placeholder="Current Password" autoComplete=""/>
                                                        <label htmlFor="profile-current-password">Current Password</label>
                                                    </div>

                                                    <div className="form-floating mb-6">
                                                        <input type="password" className="form-control" id="profile-new-password" placeholder="New password" autoComplete=""/>
                                                        <label htmlFor="profile-new-password">New password</label>
                                                    </div>

                                                    <div className="form-floating mb-6">
                                                        <input type="password" className="form-control" id="profile-verify-password" placeholder="Verify Password" autoComplete=""/>
                                                        <label htmlFor="profile-verify-password">Verify Password</label>
                                                    </div>
                                                </form>
                                                <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
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
    </aside>
  )
}
