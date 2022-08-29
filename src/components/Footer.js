import React from "react";

export default function Footer() {
  return (
    <div className=" text-white" style={{ paddingTop: "8rem" }}>
      <img
        src="/assets/footerImage.png"
        className="h-100 w-100 position-absolute"
        alt=""
        style={{ marginTop: " -25rem !important" }}
      />
      {/* <nav className="position-absolute navbar navbar-expand-lg bg-transparent navbar-dark fixed-top"> */}

      <div className="container mt-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row p-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4 className="h4 text-uppercase">About</h4>
            <div className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              cursus odio massa, ut maximus ligula. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent cursus odio massa, ut
              maximus ligula
            </div>
          </div>
          <div className="col-xl-2 col-lg- col-md-2 col-sm-2 col-xs-2">
            <h4 className="h4 text-uppercase">About</h4>
            <div>
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Team</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Join Us</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Ethic</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Goals</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg- col-md-2 col-sm-2 col-xs-2">
            <h4 className="h4 text-uppercase">About</h4>
            <div>
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Team</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Join Us</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Ethic</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Goals</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg- col-md-2 col-sm-2 col-xs-2">
            <h4 className="h4 text-uppercase">About</h4>
            <div>
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Team</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Join Us</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Ethic</a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="" className=" text-white text-decoration-none">Goals</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
