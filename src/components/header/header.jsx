import React from "react";
import PropTypes from "prop-types";
import "./style.css"
Header.propTypes = {};

function Header(props) {
  return (
    <div className="header grid flex align-items-center" style={{boxShadow:"0px 0px 35.77px 13.23px rgba(202, 202, 220, 0.16)"}}>
      <div className="col-6">
        <span>T ❤️ QA</span>
      </div>
      <div className="col-6">
        <ul className="flex">
          <li className="mx-3 uppercase font-medium">Cặp đôi</li>
          <li className="mx-3 uppercase font-medium">Sự kiện</li>
          <li className="mx-3 uppercase font-medium">Album cưới</li>
          <li className="mx-3 uppercase font-medium">Lời chúc</li>
          <li className="mx-3 uppercase font-medium">Mừng cưới</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
