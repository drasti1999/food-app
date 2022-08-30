import React from "react";

export default function Home() {
  return (
    <div className="text-white" style={{ paddingBottom: "8rem" }}>
      <img src="/assets/headerImage.png" className="h-100 w-100 home" alt="" />
      {/* <nav className="position-absolute navbar navbar-expand-lg bg-transparent navbar-dark fixed-top"> */}
      <nav className="navbar navbar-expand-sm bg-transparent navbar-dark fixed-top mt-2">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand display-3" href="#">
            Food Site
          </a>
          <div className="d-flex justify-content-end w-100 bg-sm-custom">
            <div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active bg-sm-custom-color" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bg-sm-custom-color" href="#">
                      Our Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bg-sm-custom-color" href="#">
                      Promo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bg-sm-custom-color" href="#">
                      Order
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid mt-5 position-relative p-5"
        style={{ zIndex: 2 }}
      >
        <div className="row row-cols-12 g-0">
          <div className="col-11 mt-3">
            <h1 className="text-center h1 fw-bolder display-1">
              Healthy Food <br />
              Restaurant
            </h1>
            <h4 className="text-center fw-light h4 mt-4">
              Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit.
            </h4>
          </div>
          {/* <div className="col-1 dots"></div> */}
        </div>
      </div>
    </div>
  );
}
