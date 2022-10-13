import React from "react";

function slider() {
  return (
    <div className="slider-container">
      <div
        id="carouselExampleControls"
        className="carousel slide pt-3 "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  ">
          <div className="carousel-item active">
            <img
              src="../../slider-1.jpg"
              className="img-fluid slider-img"
              alt="ppp"
            />
          </div>
          <div className="carousel-item">
            <img src="../../slider-1.jpg" className="img-fluid" alt="pp" />
          </div>
          <div className="carousel-item">
            <img src="../../slider-1.jpg" className="img-fluid" alt="pp" />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default slider;