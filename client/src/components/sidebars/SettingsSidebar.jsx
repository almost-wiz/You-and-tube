import { Context } from "../../context";
import { useFetching } from "../../hooks/useFetching";
import { useContext, useRef } from "react";
import { LoadingDots } from "../elements/Loading/LoadingDots";
import { observer } from "mobx-react-lite";

export const SettingsSidebar = observer(() => {
  const { store } = useContext(Context);

  const name = useRef();
  const [fetchProfileUpdate, isLoading, error, success] = useFetching(
    async (data) => await store.update_profile(data)
  );

  const changeImage = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("avatar", file);
    fetchProfileUpdate(data);
  };

  const setNotify = () => {
    if (Notification.permission === "granted") return;
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        if (!("permission" in Notification))
          Notification.permission = permission;
      });
    }
  };

  const changeName = () => {
    if (!name.current.value || name.current.value === store.user.name) return;
    fetchProfileUpdate({ name: name.current.value });
  };

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
                    <div className="col-auto col-xl-2">
                      <div className="avatar">
                        <img
                          className="avatar-img"
                          src={store.user.avatar}
                          alt=""
                        />
                        <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        </div>
                        <input
                          onChange={(e) => changeImage(e)}
                          id="upload-profile-photo"
                          className="d-none"
                          type="file"
                        />
                        <label
                          className="stretched-label mb-0"
                          htmlFor="upload-profile-photo"
                          style={{ cursor: "pointer" }}
                        ></label>
                      </div>
                    </div>
                    <div className="col col-xl-8">
                      <h5>{store.user.name}</h5>
                      <p className="text-truncate">{store.user.email}</p>
                    </div>
                    <div className="col-2 d-none d-xl-block">
                      <button
                        className="btn text-muted"
                        onClick={() => store.logout()}
                      >
                        <div className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <h6 className="text-center text-danger mt-5">
                  Please try again later
                </h6>
              )}
              {success && (
                <h6 className="text-center text-success mt-5">Success!</h6>
              )}

              <div className="mt-8">
                <div className="d-flex align-items-center mb-4 px-6">
                  <small className="text-muted me-auto">Account</small>
                </div>

                <div className="card border-0">
                  <div className="card-body py-2">
                    <div className="accordion accordion-flush">
                      <div className="accordion-item">
                        <div className="accordion-header">
                          <span className="accordion-button text-reset show">
                            <div>
                              <h5>Profile</h5>
                              <p>Change your profile data</p>
                            </div>
                          </span>
                        </div>

                        <div className="accordion-collapse show">
                          <div className="accordion-body">
                            <div className="form-floating mb-6">
                              <input
                                ref={name}
                                type="text"
                                className="form-control"
                                id="profile-name"
                                placeholder="Name"
                              />
                              <label htmlFor="profile-name">Name</label>
                            </div>

                            <button
                              type="button"
                              onClick={() => changeName()}
                              className="btn btn-block btn-lg btn-primary w-100"
                              disabled={isLoading ? true : false}
                            >
                              {isLoading ? <LoadingDots /> : <>Save</>}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {"Notification" in window &&
                Notification.permission !== "granted" && (
                  <div className="mt-8">
                    <div className="d-flex align-items-center mb-4 px-6">
                      <small className="text-muted me-auto">Other</small>
                    </div>

                    <div className="card border-0">
                      <div className="card-body py-2">
                        <div className="accordion accordion-flush">
                          <div className="accordion-item">
                            <div className="accordion-header">
                              <span className="accordion-button text-reset show">
                                <div>
                                  <h5>Browser notifications</h5>
                                  <p>Show browser notifications</p>
                                </div>
                              </span>
                            </div>

                            <div className="accordion-collapse show">
                              <div className="accordion-body">
                                <button
                                  type="button"
                                  onClick={setNotify}
                                  className="btn btn-block btn-lg btn-primary w-100"
                                >
                                  Show notifications
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
});
