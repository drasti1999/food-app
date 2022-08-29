import React from "react";

export default function AgusWaiters() {
  return (
    <div className="container">
      <div className="py-5 d-flex justify-content-center">
        <img src="/assets/Quote.png" alt=""/>
      </div>
      <p className="h4 fw-normal text-color text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus
        odio massa, ut maximus ligula
        <br /> sodales at. In sem nisi, mollis vitae lectus vel, lobortis
        porttitor consectetur adipiscing
        <br /> libero. Suspendisse pulvinar lectus at lorem mattis blandit.
      </p>
      <h3 className="text-color text-center my-4">Agus Waiters</h3>
      <div className="d-flex justify-content-center mt-1 mb-5">      
           <img src="/assets/facebook.png" height={50} width={50} className="mx-4"/>
           <img src="/assets/twitter.png"  height={50} width={50}/>
           <img src="/assets/instagram.png"  height={50} width={50} className="mx-4"/>
       
      </div>
    </div>
  );
}
