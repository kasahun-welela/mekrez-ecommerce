import React, { useState, useEffect } from "react";
function Card() {
  const [eCommerceData, setECommerceData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setECommerceData(data));
  }, []);

  return (
    <div>
      <div className=" row all-card-holder">
        <h3>myData.category</h3>
        {eCommerceData.map((myData) => (
          <div
            className="col-sm card-column"
            key={myData.id}
            xs={12}
            md={4}
            lg={3}
          >
            <div className="cards-cc">
              <div className="card card-container" key={myData.id}>
                <img
                  className="card-img-top card-img"
                  src={myData.image}
                  alt="CardImg"
                />
                <div className="card-body">
                  <h5 className="card-title">{myData.title}</h5>
                  <p className="card-text">{myData.description}</p>
                  <p>${myData.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* repeated for test */}
      <div className=" row all-card-holder">
        <h3>myData.category</h3>
        {eCommerceData.map((myData) => (
          <div
            className="col-sm card-column"
            key={myData.id}
            xs={12}
            md={4}
            lg={3}
          >
            <div className="cards-cc">
              <div className="card card-container" key={myData.id}>
                <img
                  className="card-img-top card-img"
                  src={myData.image}
                  alt="CardImg"
                />
                <div className="card-body">
                  <h5 className="card-title">{myData.title}</h5>
                  <p className="card-text">{myData.description}</p>
                  <p>${myData.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
