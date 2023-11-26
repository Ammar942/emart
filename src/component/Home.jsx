import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHRpbmd8ZW58MHx8MHx8fDA%3D"
          class="card-img"
          alt="background"
          hright="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container ">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW Season Arrivals
            </h5>
            <p class="card-text lead fs-2 ">Check Out All The Trends</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
