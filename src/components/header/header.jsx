import React from "react";
import "./style.css"

Header.propTypes = {};

function Header(props) {
  return (
      <div className="header grid flex align-items-center" style={{ boxShadow: "0px 0px 35.77px 13.23px rgba(202, 202, 220, 0.16)" }}>
          <div className="col-12 col-sm-6">
              <span>T ❤️ QA</span>
          </div>
          <div className="col-12 col-sm-6">
              <ul className="flex flex-wrap justify-content-center mt-3 mt-sm-0">
                  <li className="mx-2 mb-2 mb-sm-0 uppercase font-medium">Cặp đôi</li>
                  <li className="mx-2 mb-2 mb-sm-0 uppercase font-medium">Sự kiện</li>
                  <li className="mx-2 mb-2 mb-sm-0 uppercase font-medium">Album cưới</li>
                  <li className="mx-2 mb-2 mb-sm-0 uppercase font-medium">Lời chúc</li>
                  <li className="mx-2 mb-2 mb-sm-0 uppercase font-medium">Mừng cưới</li>
              </ul>
          </div>
      </div>

  );
}

export default Header;
