import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="maxWidth">
          <div className="row topContain">
            <div className="col-sm-4 col-xs-12 tix">
              <p className="hideOnMobile">TIX</p>
              <div className="row ">
                <div className="col-sm-6 col-xs-6 hideOnMobile">
                  <a href>FAQ</a>
                  <br />
                  <a href>Brand Guidelines</a>
                  <br />
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                  <a href>Thỏa thuận sử dụng</a>
                  <br />
                  <a href>Chính sách bảo mật</a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 doiTac hideOnMobile">
              <p>Đối Tác</p>
              <div className="row">
                <a href>
                  <img className="icon" src="./img/cgv.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/bhd.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/galaxycine.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/cinestar.png" alt />
                </a>
                <a href>
                  <img
                    className="icon"
                    src="./img/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt
                  />
                </a>
              </div>
              <div className="row">
                <a href>
                  <img className="icon" src="./img/cgv.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/bhd.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/galaxycine.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/cinestar.png" alt />
                </a>
                <a href>
                  <img
                    className="icon"
                    src="./img/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt
                  />
                </a>
              </div>
              <div className="row">
                <a href>
                  <img className="icon" src="./img/cgv.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/bhd.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/galaxycine.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/cinestar.png" alt />
                </a>
                <a href>
                  <img
                    className="icon"
                    src="./img/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt
                  />
                </a>
              </div>
              <div className="row">
                <a href>
                  <img className="icon" src="./img/cgv.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/bhd.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/galaxycine.png" alt />
                </a>
                <a href>
                  <img className="icon" src="./img/cinestar.png" alt />
                </a>
                <a href>
                  <img
                    className="icon"
                    src="./img/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 mediaApp">
              <div className="row">
                <div className="col-xs-6 mobileApp hideOnMobile">
                  <p>MOBILE APP</p>
                  <a className="col-xs-6" href>
                    <img src="./img/apple-logo.png" alt />
                  </a>
                  <a className="col-xs-6" href>
                    <img src="./img/android-logo.png" alt />
                  </a>
                </div>
                <div className="col-xs-6 social m-auto text-center">
                  <p className="hideOnMobile">Social</p>
                  <a className="col-xs-6" href>
                    <img src="./img/facebook-logo.png" alt />
                  </a>
                  <a className="col-xs-6" href>
                    <img src="./img/zalo-logo.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row bottomContain">
            <div className="col-sm-1 col-xs-12 zion">
              <img className="d-block m-auto" src="./img/zion-logo.jpg" alt />
            </div>
            <div className="col-sm-9 col-xs-12 d-block ">
              <span className="tix_info">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </span>
              <span>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span>
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
                Minh cấp.
              </span>
              <span>
                Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
                <br />
                Email:{" "}
                <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                  support@tix.vn
                </a>
              </span>
            </div>
            <div className="col-sm-1 col-xs-12 bct">
              <img
                className="d-block m-auto "
                src="./img/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
