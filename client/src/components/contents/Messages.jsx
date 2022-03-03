import { useState } from 'react'
import { ChatInfoModal } from '../modals/ChatInfoModal'
import { ModalCascade } from '../modals/ModalCascade'
import { Link } from '../elements/Link'

export const Messages = () => {
  const [chatInfoModal, setChatInfoModal] = useState(false);

  return (
    <>
      <main className="main is-visible">
        <div className="container h-100">
          <div className="d-flex flex-column h-100 position-relative">

            <div className="chat-header border-bottom py-4 py-lg-7">
              <div className="row align-items-center">

                <div className="col-2 d-xl-none">
                  <Link to='/chats' force="true" className="btn p-0 icon icon-lg text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </Link>
                </div>

                <div className="col">
                  <div className="row align-items-center gx-5">
                    <div className="avatar mx-5">
                      <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                    </div>

                    <div className="col overflow-hidden">
                      <h5 className="text-truncate">Bootstrap Community</h5>
                      <p className="text-truncate">35 members</p>
                    </div>
                  </div>
                </div>

                <div className="col-2 d-flex flex-column align-items-end overflow-hidden">
                  <button
                    className="btn icon icon-lg text-muted"
                    onClick={() => {setChatInfoModal(true)}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="chat-body hide-scrollbar flex-1 h-100">
              <div className="chat-body-inner">
                <div className="py-6 py-lg-12">

                  <div className="message-divider">
                    <small className="text-muted">Friday, Sep 20</small>
                  </div>

                  <div className="message">
                    <span className="avatar avatar-responsive">
                      <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                    </span>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                    	    <div className="message-text">
                    	      <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                    	    </div>
                    	  </div>
                    	  <div className="message-content">
                    	    <div className="message-text">
                    	      <p>Send me the files please</p>
                    	    </div>
                    	  </div>
                    	</div>

                    	<div className="message-footer">
                    	  <span className="extra-small text-muted">08:45 PM</span>
                    	</div>
                    </div>
                  </div>

                  <div className="message message-out">
                    <span data-bs-toggle="modal" data-bs-target="#modal-profile" className="avatar avatar-responsive">
                      <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                    </span>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple? 😂</p>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="message">
                    <span data-bs-toggle="modal" data-bs-target="#modal-profile" className="avatar avatar-responsive">
                      <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                    </span>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>William is typing<span className='typing-dots'><span>.</span><span>.</span><span>.</span></span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
              <div className="dz-preview bg-dark"></div>
              <form className="chat-form rounded-pill bg-dark">
                <div className="row align-items-center gx-0">
                  <div className="col px-5">
                    <div className="input-group">
                      <textarea className="form-control px-0" placeholder="Type your message..." rows="1" style={{overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: 47}}></textarea>
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
          </div>
        </div>
      </main>

      {chatInfoModal === true && <ModalCascade Children={ChatInfoModal} setModal={setChatInfoModal}/>}
    </>
  )
}
