import React, { useState, useEffect } from "react";

function NavigatioCatagory() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <div className="bottom-nav ">
      <div className="bottom-nav-element ml-5">
        <button
          className="btn all-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon icon-three "></span>All Product
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header offCanvas-title">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Hello User Please Sign In
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="h-divider"></div>
          <div className="offcanvas-body">
            <div>
              <h4>Shop By Catagories</h4>
              <div className="h-divider"></div>
              {apiData.map((cat) => (
                <div className="category-list">
                  <div className="category-list-name" key={cat.id}>
                    {cat.name}
                  </div>
                  <div className="category-list-sign">&gt;</div>
                </div>
              ))}
            </div>

            {/* the above code from dynamic rendering */}
            <div style={{ marginTop: 30 }}>
              <h4>Help and Setting </h4>
              <div className="h-divider"></div>
              <div className="category-list">
                <div className="category-list-name">Your Account</div>
              </div>
              <div className="category-list">
                <div className="category-list-name">English</div>
              </div>
              <div className="category-list">
                <div className="category-list-name">Ethiopia</div>
              </div>
              <div className="category-list">
                <div className="category-list-name">Customer Service</div>
              </div>
              <div className="category-list">
                <div className="category-list-name">Sign-in</div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* end for side button */}
        {/* <div className="bottom-nav-element"> */}
        <ul className="navbar-nav  bottom-nav-li ">
          <li className="nav-item">
            <a className="nav-link" href="www.kwk.com/limlbbb">
              Today's Deal
            </a>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
}

export default NavigatioCatagory;
