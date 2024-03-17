
const NoPage = () => {
    return (
      <div className="error-page d-flex align-items-center justify-content-center">
        <p className="fw-bold fs-2 d-flex flex-column text-center gap-3">
          <span>Oops 🥲</span>
          <span className="text-capitalize bg-light p-3 text-danger">Page Not Found! 💔</span>
        </p>
      </div>
    )
  }
  
  export default NoPage