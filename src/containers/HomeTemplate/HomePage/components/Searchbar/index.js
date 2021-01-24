import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Searchbar(props) {
  const [movieName, setMovieName] = useState("Phim");
  const handleChangeMovie = (e) => {
    console.log(e.target.value);
    setMovieName(e.target.value);
  };

  const [theaterName, setTheaterName] = useState("Rạp");
  const handleChangeTheater = (e) => {
    console.log(e.target.value);
    setTheaterName(e.target.value);
  };

  const { listMovie, listTheater } = props;

  const renderListMovie = () => {
    if (listMovie != null) {
      console.log(listMovie);
      return listMovie.map((item) => (
        <button
          className="dropdown-item" 
          to="/"
          key={item.maPhim}
          value={item.tenPhim}
          onClick={handleChangeMovie}
        >
          {item.tenPhim}
        </button>
      ));
    }
  };

  const renderListTheater = () => {
    if (listTheater != null) {
      console.log(listTheater);
      return listTheater.map((item) => (
        <button
          className="dropdown-item"
          type="button"
          key={item.maHeThongRap}
          value={item.tenHeThongRap}
          onClick={handleChangeTheater}
        >
          {item.tenHeThongRap}
        </button>
      ));
    }
  };

  return (
    <section className="searchBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {movieName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {renderListMovie()}
                
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {theaterName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {renderListTheater()}
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ngày xem
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item"  to="/">
                  Vui Lòng chọn phim và rạp
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Suất chiếu
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">
                  Vui Lòng chọn phim , rạp và ngày xem
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              MUA VÉ NGAY
            </button>
          </form>
        </div>
      </nav>
    </section>
  );
}

export default Searchbar;
