import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header grid flex align-items-center">
      <div className="col-6">
        <span>T &3 QA</span>
      </div>
      <div className="col-6">
        <ul className="flex">
          <li className="mx-1 uppercase font-medium">Cặp đôi</li>
          <li className="mx-1 uppercase font-medium">Sự kiện</li>
          <li className="mx-1 uppercase font-medium">Album cưới</li>
          <li className="mx-1 uppercase font-medium">Lời chúc</li>
          <li className="mx-1 uppercase font-medium">Mừng cưới</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
