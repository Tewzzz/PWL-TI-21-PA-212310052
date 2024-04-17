import React from "react";

const Header = () => {
  return (
    <header
      className='navbar navbar-expand-lg bg-primary bg-gradient sticky-top"
        style={{ background: "linear-gradient(to right, #007bff, #00bfff)'
    >
      <div className="container-fluid">
        <h1 className="fw-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png"
            height={48}
            width={48}
            className=""
          />
          IBI Kesatuan
        </h1>

        <div>
          <ul className="navbar-nav">
            <a className="nav-link active" href="#">
              Home
            </a>
            <li className="nav-link">-</li>
            <a className="nav-link" href="#">
              PWL
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
