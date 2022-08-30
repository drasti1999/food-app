import React from "react";

export default function Footer() {
  return (
    <div className="text-white" style={{ paddingTop: "8rem" }}>
      <img
        src="/assets/footerImage.png"
        className="h-100 w-100 position-absolute"
        alt=""
        style={{ marginTop: "-30rem" }}
      />
      {/* <nav className="position-absolute navbar navbar-expand-lg bg-transparent navbar-dark fixed-top"> */}
      <div className="bg-site">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row py-5 px-2">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-xs-12">
              <h4 className="h4 text-uppercase text">About</h4>
              <div className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent cursus odio massa, ut maximus ligula. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Praesent cursus odio
                massa, ut maximus ligula
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-3 w-custom-footer">
              <h1 className="h4 text-uppercase">About</h1>
              <a href="" className=" text-white text-decoration-none">
                Team
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Join Us
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Ethic
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Goals
              </a>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-3 w-custom-footer">
              <h1 className="h4 text-uppercase">About</h1>
              <a href="" className=" text-white text-decoration-none">
                Team
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Join Us
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Ethic
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Goals
              </a>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-3 w-custom-footer">
              <h1 className="h4 text-uppercase">About</h1>
              <a href="" className=" text-white text-decoration-none">
                Team
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Join Us
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Ethic
              </a>
              <br />
              <a href="" className=" text-white text-decoration-none">
                Goals
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
