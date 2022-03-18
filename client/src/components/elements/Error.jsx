export const Error = ({ code = 404, message = "Not Found" }) => {
  return (
    <div className="container vh-100">
      <div className="row align-items-center justify-content-center h-100 gx-0">
        <div className="text-center">
          <h1 className="fw-bold">{code}</h1>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
