import React, {useState} from "react";
import { Link } from "react-router-dom";
import webLogo from "../../assets/images/web-logo.png";
import avatarPic from "../../assets/images/avatar.png";
import locatLogo from "../../assets/images/location-header.png";
const locatLists = [
  { id: 1, name: "Hồ Chí Minh" },
  { id: 2, name: "Hà Nội" },
  { id: 3, name: "Đà Nẵng" },
  { id: 4, name: "Hải Phòng" },
  { id: 5, name: "Biên Hòa" },
  { id: 6, name: "Nha Trang" },
  { id: 7, name: "Bình Dương" },
  { id: 8, name: "Phan Thiết" },
  { id: 9, name: "Hạ Long" },
  { id: 10, name: "Cần Thơ" },
  { id: 11, name: "Vũng Tàu" },
];

export default function NavbarHome() {
     const [locatName, setLocatName] = useState("Hồ Chí Minh");
     const handleChangeLocat = (e) => {
          console.log(e.target.value);
          setLocatName(e.target.value);
          
     };
  return (
    <header className="header">
      <div className="header__content d-flex">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img className="webLogo" src={webLogo} alt={webLogo} />
          </Link>
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
                <Link className="nav-link" to="/">
                  Lịch chiếu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Cụm rạp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Tin Tức
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Ứng dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
          <div className="log-in">
            <Link className="titleDisplay" to="/">
              <img src={avatarPic} alt={avatarPic} />
              <span className="titleLogin">Đăng nhập</span>
            </Link>
          </div>

          <div className="dropdown address">
            <button
              className="btn btn-secondary dropdown-toggle bg-white text-dark address__drop"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              
              
            >
              <img className="locatImage" src={locatLogo} alt={locatLogo} />
              
              {locatName}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {locatLists.map((item) => (
               <button className="dropdown-item" type="button" key={item.id} value={item.name} onClick={handleChangeLocat}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          </div>
          
        </nav>
      </div>
    </header>
  );
}
