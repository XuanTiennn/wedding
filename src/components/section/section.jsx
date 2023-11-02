import React from "react";
import PropTypes from "prop-types";
import Button from "../button-social/button";

Section.propTypes = {
  urlImg: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};

function Section(props) {
  const { urlImg, name, role } = props;
  return (
    <div className={props.className}>
      <img src={urlImg} />
      <div className="flex flex-column align-items-center justify-content-center">
        <span>{name}</span>
        <span>{role}</span>
        <ul className="flex align-items-center">
          <li className="bg-red border-circle flex justify-content-center align-items-center">
            <i className="pi pi-facebook bg-white" style={{ fontSize: "1.5rem" }}></i>
          </li>
          <li className="mx-2">
            <i className="pi pi-twitter" style={{ fontSize: "1.5rem" }}></i>
          </li>
          <li>
            <i className="pi pi-instagram" style={{ fontSize: "1.5rem" }}></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
