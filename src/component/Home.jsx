import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="public/assets/bg.jpg"
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
