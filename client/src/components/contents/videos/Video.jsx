import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  PlaybackRateMenuButton
} from 'video-react';
import { Link } from '../../elements/Link'
import { VideoSearchBar } from '../../elements/VideoSearchBar'

export const Video = () => {

  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <VideoSearchBar />

          <div className="chat-body hide-scrollbar flex-1 h-100">
            <div className="chat-body-inner">

              <div className="card mt-5">
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  preload="auto"
                  aspectRatio="16:9"
                  autoPlay
                >
                  <BigPlayButton position="center" />
                  <LoadingSpinner />
                  <ControlBar>
                    <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5, 0.25]} />
                  </ControlBar>
                </Player>
                <div className="card-body">
                  <span className="card-title">#tags</span>
                  <h2 className="card-title">Title</h2>
                  <h6 className="text-muted">Date</h6>

                  <hr/>
                  <div className="row">
                    <div className="col-10 col-lg row align-items-center gx-5">
                      <div className="avatar mx-5">
                        <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-notifications-justicon-lineal-color-justicon.png" alt="Logo"/>
                      </div>
                      <div className="col overflow-hidden">
                        <Link to="/videos/authors/1"><h4 className="card-title">Author</h4></Link>
                        <p className="text-truncate">subscribers</p>
                      </div>
                    </div>
                    <div className="col-2 col-lg d-flex flex-column align-items-end">
                      <button className='btn btn-primary'>Subscribe(or unsubscribe)</button>
                    </div>
                  </div>

                  <hr/>

                  <h6 className="card-text mt-5">Description.</h6>

                  <hr/>

                  <div className="container my-5 py-5 text-dark">
                    <div className="row d-flex justify-content-center">

                      <div className="card mb-3">
                        <div className="card-body px-0">
                          <div className="d-flex flex-start">
                            <img
                              className="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                              alt="avatar"
                              width="40"
                              height="40"
                            />
                            <div className="w-100">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6 className="text-primary fw-bold mb-0">
                                  <Link to="/videos/authors/1" className='text-primary'>lara_stewart</Link>
                                  <span className="text-dark ms-2">Hmm, This poster looks cool</span>
                                </h6>
                                <p className="mb-0">2 days ago</p>
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

        </div>
      </div>
    </main>
  )
}
