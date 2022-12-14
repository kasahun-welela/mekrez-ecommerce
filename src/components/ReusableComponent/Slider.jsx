import React from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
function slider() {
  return (
    <div className="align-middle mt-4 ml-3 mr-3 md:ml-12 md:mr-12">
      <div id="default-carousel" className="relative" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item=""
          >
            <img
              src="../slider-1.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              alt="images 1"
            />
          </div>

          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src="../slider-1.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="images 2"
            />
          </div>

          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src="../slider-1.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="images 3"
            />
          </div>
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <FcPrevious className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <FcNext className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default slider;
