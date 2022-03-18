import { SearchUsersForm } from "../forms/SearchUsersForm";
import TextareaAutosize from 'react-textarea-autosize';
import { useRef } from "react";

export const ChatCreateSidebar = () => {
  const title = useRef();
  const description = useRef();

  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100">
        <div className="d-flex flex-column h-100">
          <div className="hide-scrollbar">
            <div className="container py-8">
              <div className="mb-8">
                <h2 className="fw-bold m-0">Create chat</h2>
              </div>
              <div className="mb-6">
                <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#offcanvas-group-tab-details"
                    >
                      Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="pill"
                      href="#offcanvas-group-tab-search"
                    >
                      People
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <div
                  id="offcanvas-group-tab-details"
                  role="tabpanel"
                  className="tab-pane fade show active"
                >
                  <div className="card border-0">
                    <div className="profile">
                      <div className="profile-img text-primary rounded-top">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs style={{fill:'#fff',opacity:0.1}}></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z"></path><path className="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"></path><path className="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z"></path><circle className="cls-2" cx="94.5" cy="57.5" r="22.5"></circle><path className="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"></path></g></g></svg>
                      </div>
                    </div>

                    <div className="card-body">
                      <form autoComplete="off">
                        <div className="row gy-6">
                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                ref={title}
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter a chat name"
                              />
                              <label htmlFor="title">
                                Enter group name
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <TextareaAutosize
                                ref={description}
                                className="form-control"
                                placeholder="Description"
                                id="description"
                                style={{overflow: 'hidden'}}
                              />
                              <label htmlFor="description">
                                Enter group description
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <SearchUsersForm title={title} description={description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
