

const Hero = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 fw-bold">Welcome to BookStore</h1>
          <p className="lead text-muted">
            Discover a world of knowledge and adventure. Explore our collection of books across genres and find your next favorite read!
          </p>
          <div className="d-flex align-items-center">
            <div className="input-group me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
             
            </div>
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            
          </div>
        </div>

        <div className="col-lg-6 text-center mt-4 mt-lg-0 ">
          <img
            src="/public/26353.jpg"
            alt="Hero Image"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
