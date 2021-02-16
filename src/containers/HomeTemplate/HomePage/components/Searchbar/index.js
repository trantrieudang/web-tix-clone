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
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="first nav-item active" style={{width: '30%'}}>
              <NavLink
              
                className=" nav-link dropdown-toggle"
                to="/"
                id="selectFilm"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {movieName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectFilm" >
                {renderListMovie()}
                
              </div>
            </li>
            <li className="nav-item dropdown" style={{width: 'calc(70%/4)'}}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="selectCinema"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {theaterName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectCinema">
                {renderListTheater()}
              </div>
            </li>
            <li className="nav-item dropdown" style={{width: 'calc(70%/4)'}}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="selectDate"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ngày xem
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectDate">
                <Link className="dropdown-item"  to="/">
                  Vui Lòng chọn phim và rạp
                </Link>
              </div>
            </li>
            <li className=" nav-item dropdown" style={{width: 'calc(70%/4)'}}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="selectSession"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Suất chiếu
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectSession">
                <Link className="dropdown-item" to="/">
                  Vui Lòng chọn phim , rạp và ngày xem
                </Link>
              </div>
            </li>
            <button className="btnBuyTicket btn btn-secondary my-2 my-sm-0" type="submit" style={{width: 'calc(70%/4)'}}>
              MUA VÉ NGAY
            </button>
          </ul>
          
            
          
        </div>
      </nav>
    </section>
  );
}

export default Searchbar;
