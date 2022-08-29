import React from "react";

export default function HowToOrder() {
  return (
    <div className="my-0 btn-site">
      <div className="container">
        <h1 className="text-center text-site">Popular Menu</h1>
        <div className="row my-2 g-4">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card p-0">
              <div class="card-body p-0">
                <img
                  src="/assets/noodles1.jpg"
                  alt=""
                  className="img img-thumbnail border-0 card-title m-0"
                />
                <p class="card-text p-3">
                  <h1 className="h1">Noodles</h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet lectus sed justo interdum finibus.....
                  <h1 className="h1 mt-2">$13</h1>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card p-0">
              <div class="card-body p-0">
                <img
                  src="/assets/noodles2.jpg"
                  alt=""
                  className="img img-thumbnail border-0 card-title m-0"
                />
                <p class="card-text p-3">
                  <h1 className="h1">Noodles</h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet lectus sed justo interdum finibus.....
                  <h1 className="h1 mt-2">$13</h1>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card p-0">
              <div class="card-body p-0">
                <img
                  src="/assets/noodles3.jpg"
                  alt=""
                  className="img img-thumbnail border-0 card-title m-0"
                />
                <p class="card-text p-3">
                  <h1 className="h1">Noodles</h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet lectus sed justo interdum finibus.....
                  <h1 className="h1 mt-2">$13</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn rounded-5 btn-site">Show More</button>
        </div>
      </div>
    </div>
  );
}
