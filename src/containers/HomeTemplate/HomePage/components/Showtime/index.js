import React from "react";
import { Link } from "react-router-dom";
export default function Showtime(props) {
  const { listTheater, listMovie } = props;
 

  const renderListTheater1 = () => {
    if (listTheater !== null) {
      
      return listTheater.map((item) => (
        <div
          key={item.biDanh}
          
          className="list-group-item list-group-item-action active bg-white"
          id="list-home-list"
          data-toggle="list"
          href= "bhd"
          role="tab"
          aria-controls="home"
        >
          <img src={item.logo} alt={item.logo} />
        </div>
      ));
    }
  };

  const renderListTheater2 = () => {
    if (listTheater !== null) {
     
      return listTheater.map((item) => (
        <div
          className="showTime__sublist list-group-item list-group-item-action active bg-white d-flex "
          id="list-home-list"
          data-toggle="list"
          href="#bhd-1"
          role="tab"
          aria-controls="home"
          key={item.biDanh}
        >
          <img src={item.logo} alt={item.logo} />
          <div className="movieCinema">
            <span className="nameMovieCinema">
              <span className="colorCinema">{item.maHeThongRap}</span>- Bitexco
            </span>
            <span className="infoMovieCinema">
              L3-Bitexco Icon 68, 2 Hải Triều, Q.1
            </span>
            <span className="redDetail">
              <Link to="/">[Chi tiết]</Link>
            </span>
          </div>
        </div>
      ));
    }
  };

  const renderListTheater3 = () => {
    if (listMovie !== null) {
      
      return listMovie.map((item) => (
        <div className="showTime__movie" key={item.maPhim}>
          <div className="showTime__movie-panel">
            <div className="showTime__movie-pane-top">
              <img src={item.hinhAnh} alt={item.hinhAnh} />
              <div className="showTime__movie-pane-top-info">
                <p className="showTime__movie-pane-top-info-name">
                  <span className="showTime__movie-pane-top-info-brand">
                    C16
                  </span>
                  <span className="showTime__movie-pane-top-info-title">
                    {item.tenPhim}
                  </span>
                </p>
                <p className="showTime__movie-pane-top-info-name-detail">
                  100 phút - TIX 6.2 - IMDb 7
                </p>
              </div>
            </div>
            <div className="showTime__movie-pane-bottom ">
              <div className="showTime__movie-pane-bottom-time">
                <div className="showTime__movie-pane-bottom-time-ver">
                  2D Digital
                </div>
                <div className="showTime__movie-pane-bottom-time-sessions">
                  <Link
                    to="/"
                    className="showTime__movie-pane-bottom-time-sessions-link"
                  >
                    <span className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">
                      17:30
                    </span>
                    ~ 19:10
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <section className="showTime" id="showTime_Link">
      <div className="showTime__content container">
        <div className="showTime__detail row">
          <div className="col-2 left-content d-flex justify-content-end">
            <div className="list-group" id="list-tab" role="tablist">
              {renderListTheater1()}
            </div>
          </div>
          <div className="col-10 middle-content ">
            <div className="tab-content" id="tab-sublist">
              <div
                className="tab-pane fade show active"
                id="BHDStar"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <div className="showTime__detail-2 row">
                  <div className="col-4 showTime__items-left-2 ">
                    <div className="list-group " id="list-tab" role="tablist">
                      {renderListTheater2()}
                    </div>
                  </div>
                  <div className="col-8  showTime__items-right-2">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="bhd-1"
                        role="tabpanel"
                        aria-labelledby="list-home-list"
                      >
                        {renderListTheater3()}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="bhd-2"
                        role="tabpanel"
                        aria-labelledby="list-profile-list"
                      ></div>
                      <div
                        className="tab-pane fade"
                        id="bhd-3"
                        role="tabpanel"
                        aria-labelledby="list-messages-list"
                      ></div>
                      <div
                        className="tab-pane fade"
                        id="bhd-4"
                        role="tabpanel"
                        aria-labelledby="list-settings-list"
                      ></div>
                      <div
                        className="tab-pane fade"
                        id="bhd-5"
                        role="tabpanel"
                        aria-labelledby="list-settings-list"
                      ></div>
                      <div
                        className="tab-pane fade"
                        id="bhd-6"
                        role="tabpanel"
                        aria-labelledby="list-settings-list"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="galaxy"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="star"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="ddc"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="mega"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="cine"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="lotte"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
