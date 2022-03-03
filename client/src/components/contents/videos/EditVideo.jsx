import { Link } from '../../elements/Link'
import { VideoControlForm } from '../../elements/VideoControlForm'

export const EditVideo = () => {
  return (
    <main className="main is-visible">
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <div className="chat-header border-bottom py-4 py-lg-7">

            <div className="row align-items-center ">
              <div className="col-4 col-lg-2 p-0 my-5 d-xl-none d-flex flex-row align-items-center">
                <Link to='/videos' className="btn btn-icon btn-primary rounded-circle ms-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </Link>
              </div>
              <div className="col-8 col-lg">
                <h1 className="text-truncate m-0">Edit video</h1>
              </div>
            </div>
          </div>

          <div className="chat-body hide-scrollbar flex-1 h-100">
            <div className="chat-body-inner">
              <div className="py-6 py-lg-12">

                <VideoControlForm data={{}} mode='edit'/>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
