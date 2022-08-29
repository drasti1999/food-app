import React from "react";

export default function Discount() {
  return (
    <div className="container-fluid my-5 gx-0 p-0 border-0 bg-white">
      <div className="row m-0 p-0 g-0 w-100">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <img
            src="/assets/chinese1.jpg"
            alt=""
            className="img img-thumbnail border-0 bg-transparent rounded-0"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-4 py-5">
          <div className="h1 display-5 fw-bold">
            Discount up to <br /> 50% All Menu
          </div>
          <p className="my-4 fw-normal" style={{ fontSize: "1.5rem" }}>
            Duis euismod vestibulum nunc, id convallis dui ullamcorper ut.
            Vestibulum blandit dictum neque sit amet feugiat. Suspendisse eu
            molestie risus. Aenean eros purus, tincidunt at nibh ut, volutpat
            egestas ipsum.
          </p>
          <div className="mt-5">
            <button className="btn rounded-5 btn-site">Read More</button>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 g-0 w-100">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-4 py-5">
          <div className="h1 display-5 fw-bold">
            Discount up to <br /> 50% All Menu
          </div>
          <p className="my-4 fw-normal" style={{ fontSize: "1.5rem" }}>
            Duis euismod vestibulum nunc, id convallis dui ullamcorper ut.
            Vestibulum blandit dictum neque sit amet feugiat. Suspendisse eu
            molestie risus. Aenean eros purus, tincidunt at nibh ut, volutpat
            egestas ipsum.
          </p>
          <div className="mt-5">
            <button className="btn rounded-5 btn-site">Read More</button>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <img
            src="/assets/chinese2.jpg"
            alt=""
            className="img img-thumbnail border-0 bg-transparent rounded-0"
          />
        </div>
      </div>
    </div>
  );
}
