import { useLocation } from "react-router-dom";
import { Link } from '../elements/Link'

export const VideosSidebar = () => {
  const location = useLocation().pathname.split('/')[2];

  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100">
        <div className="d-flex flex-column h-100 position-relative">
            <div className="hide-scrollbar">

                <div className="container py-8">

                    <div className="mb-8">
                        <h2 className="fw-bold m-0">Videos</h2>
                    </div>

                    <div className="mb-6">
                        <div className="mt-5">
                            <Link
                              to="/videos/recommendations"
                              className={location === 'recommendations' ? "btn btn-lg w-100 d-flex align-items-center btn-primary" : "btn btn-lg w-100 d-flex align-items-center btn-secondary"}
                            >
                                Recomended for you
                                <span className="icon ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.8 486.8" fill="white" stroke="currentColor" strokeWidth="20"><g><g><path d="M372.4,249.3h-74.5v-52.9c0-24.6-7.3-42.5-21.8-53.1c-22.8-16.7-53.8-7.3-55.1-6.8c-5,1.6-8.4,6.2-8.4,11.4v62.7 c0,19.4-9.3,35.8-27.6,49c-11.9,8.6-24.1,13.1-28.4,14.5c-3.2-4.9-8.7-8.1-15-8.1H77.2c-9.9,0-17.9,8.1-17.9,17.9v175.6 c0,9.9,8.1,17.9,17.9,17.9h64.4c4.4,0,8.4-1.6,11.6-4.2c9.5,8.5,22,13.6,35.5,13.6h153.5c15.2,0,28.7-3.7,39-10.6 c13.1-8.8,21.3-23,23.5-40.9l20.2-128.1c0.3-1.9,0.4-3.7,0.4-5.5C424.2,272.9,400.4,249.3,372.4,249.3z M135.5,453.6H83.2V290.1	h52.3V453.6z M401.2,303.6L381,431.9c0,0.1,0,0.3-0.1,0.4c-0.9,7.6-3.7,30.6-38.7,30.6H188.7c-14,0-26-10-28.6-23.7 c-0.1-0.6-0.3-1.2-0.5-1.8V298.2c0.6-0.1,1.3-0.2,1.9-0.4c0.8-0.2,18.8-5.3,36.9-18.2c25-17.7,38.2-41.6,38.2-69v-52.9 c7.2-0.8,17.7-0.7,25.3,4.9c7.9,5.8,12,17.2,12,33.7v64.9c0,6.6,5.4,12,12,12h86.5c15.1,0,28.3,13.5,28.9,29.5 C401.3,302.8,401.3,303.1,401.2,303.6z"/><path d="M254.4,101.6c6.6,0,12-5.4,12-12V12c0-6.6-5.4-12-12-12c-6.6,0-12,5.4-12,12v77.5C242.4,96.2,247.8,101.6,254.4,101.6z"/><path d="M326,186.3c0,6.6,5.4,12,12,12h77.5c6.6,0,12-5.4,12-12s-5.4-12-12-12H338C331.4,174.3,326,179.7,326,186.3z"/><path d="M93.2,198.3h77.5c6.6,0,12-5.4,12-12s-5.4-12-12-12H93.2c-6.6,0-12,5.4-12,12S86.6,198.3,93.2,198.3z"/><path d="M126.3,68.5c3.2,0,6.3-1.3,8.5-3.5s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5s-5.3-3.5-8.5-3.5s-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5 s1.3,6.3,3.5,8.5C120,67.3,123.1,68.5,126.3,68.5z"/><path d="M153.7,95.9c3.1,0,6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0s-4.7,12.3,0,17 C147.5,94.8,150.6,95.9,153.7,95.9z"/><path d="M181.1,123.4c3.2,0,6.3-1.3,8.5-3.5s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5s-5.3-3.5-8.5-3.5s-6.3,1.3-8.5,3.5 s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5C174.8,122.1,177.9,123.4,181.1,123.4z"/><path d="M374.3,74.1c3.2,0,6.3-1.3,8.5-3.5s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5c-2.2-2.2-5.3-3.5-8.5-3.5s-6.3,1.3-8.5,3.5 c-2.2,2.2-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5C368,72.9,371.1,74.1,374.3,74.1z"/><path d="M346.9,101.6c3.1,0,6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0s-4.7,12.3,0,17 C340.7,100.4,343.8,101.6,346.9,101.6z"/><path d="M319.5,129c3.2,0,6.3-1.3,8.5-3.5s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5s-5.3-3.5-8.5-3.5s-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5 s1.3,6.3,3.5,8.5C313.2,127.7,316.3,129,319.5,129z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                </span>
                            </Link>
                        </div>
                        <div className="mt-5">
                            <Link
                              to="/videos/subscribtions"
                              className={location === 'subscribtions' ? "btn btn-lg w-100 d-flex align-items-center btn-primary" : "btn btn-lg w-100 d-flex align-items-center btn-secondary"}
                            >
                                Subscribtions
                                <span className="icon ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                </span>
                            </Link>
                        </div>
                        <div className="mt-5">
                            <Link
                              to="/videos/author-panel"
                              className={location === 'author-panel' ? "btn btn-lg w-100 d-flex align-items-center btn-primary" : "btn btn-lg w-100 d-flex align-items-center btn-secondary"}
                            >
                                Author's panel
                                <span className="icon ms-auto">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" fill="white"><g><g><path d="M253.468,432.168l-5.806,3.352l-33.768,19.496l-19.497-33.769l-1.373-2.376c-12.175,1.417-24.782,2.165-37.727,2.165 c-64.156,0-120.118-18.188-155.296-46.81v44.413c0,11.226,5.375,33.128,41.372,53.699c30.115,17.208,70.574,26.685,113.923,26.685 s83.809-9.477,113.923-26.685c9.503-5.429,16.852-10.951,22.552-16.345C278.02,449.824,265.13,441.84,253.468,432.168z"/></g></g><g><g><path d="M194.923,330.887c-1.397-8.286-2.134-16.701-2.272-25.194c-12.06,1.388-24.542,2.124-37.355,2.124 c-64.156,0-120.118-18.188-155.296-46.81v32.78v7.87h0.001c0,11.227,5.375,33.128,41.372,53.699 c30.115,17.208,70.574,26.685,113.923,26.685c5.453,0,10.859-0.151,16.206-0.448L155.4,353.705l33.772-19.497L194.923,330.887z"/></g></g><g><g><path d="M174.898,218.384l14.146-24.501c-10.917,1.153-22.193,1.756-33.748,1.756c-65.712,0-122.42-19.42-155.296-49.384v30.553 v11.633h0.001c0,11.225,5.375,33.128,41.372,53.699c30.115,17.208,70.574,26.685,113.923,26.685 c9.088,0,18.037-0.441,26.803-1.258L155.4,252.153L174.898,218.384z"/></g></g><g><g><path d="M263.315,37.314c-28.533-15.693-66.896-24.336-108.019-24.336c-41.126,0-79.487,8.642-108.021,24.336 C22.786,50.782,8.741,68.096,8.741,84.81s14.046,34.028,38.534,47.496c28.533,15.693,66.896,24.336,108.021,24.336 c41.125,0,79.486-8.642,108.019-24.336c24.49-13.469,38.534-30.782,38.534-47.496S287.804,50.782,263.315,37.314z"/></g></g><g><g><path d="M489.081,302.931c0-16.482-3.117-32.25-8.787-46.746l31.708-18.305l-19.497-33.769l-31.762,18.336 c-19.756-24.599-48.343-41.819-80.909-46.788v-36.6h-38.994v36.6c-32.567,4.969-61.153,22.189-80.911,46.788l-31.762-18.336 l-19.497,33.769l31.708,18.305c-5.668,14.498-8.787,30.265-8.787,46.746c0,16.482,3.117,32.248,8.787,46.745l-31.708,18.305 l19.497,33.769l31.761-18.336c19.758,24.599,48.344,41.819,80.912,46.787v36.601h38.994v-36.601 c32.568-4.968,61.153-22.186,80.911-46.785l31.761,18.335L512,367.981l-31.706-18.305 C485.962,335.179,489.081,319.413,489.081,302.931z M360.336,355.307c-28.882,0-52.377-23.495-52.377-52.376 c0-28.882,23.495-52.377,52.377-52.377c28.88,0,52.376,23.495,52.376,52.377C412.711,331.81,389.215,355.307,360.336,355.307z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
      </div>
    </aside>
  )
}
