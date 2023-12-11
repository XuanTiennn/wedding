import React from "react";
import PropTypes from "prop-types";
import Button from "../button-social/button";
import "./style.css";
Section.propTypes = {
  urlImg: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};

function Section(props) {
  const { urlImg, name, role } = props;
  return (
    <div className={props.className}>
      <img src={urlImg}  alt={""}/>
      <div className="flex flex-column align-items-center justify-content-center">
        <h2 className="name-main">{name}</h2>
        <span className="name-info">{role}</span>
        <ul className="flex align-items-center justify-content-center p-0">
          <li className="bg-red section-button border-circle flex justify-content-center align-items-center">
            <i className="pi pi-facebook" style={{ fontSize: "1.5rem" }}></i>
          </li>
          <li className="mx-2 bg-red section-button border-circle flex justify-content-center align-items-center">
            <i className="pi pi-twitter" style={{ fontSize: "1.5rem" }}></i>
          </li>
          <li className="bg-red section-button border-circle flex justify-content-center align-items-center">
            <i className="pi pi-instagram" style={{ fontSize: "1.5rem" }}></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
