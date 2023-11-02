import React from "react";
import PropTypes from "prop-types";
import { Button } from "primereact/button";

Item.propTypes = {
  urlImg: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  urlMap: PropTypes.string,
  time: PropTypes.string,
};

function Item(props) {
  const { urlImg, title, address, time, urlMap, className } = props;
  return (
    <div className={className}>
      <img className="w-full" src={urlImg} />
      <p className="font-semibold	">{title}</p>
      <p className="text-sm	">{address}</p>
      <p className="text-sm	">{time}</p>
      <Button className="w-9 button-hover text-333" rounded outlined label="Thêm vào lịch" icon="pi pi-calendar-plus" />
      <Button className="w-9 mt-2 button-hover text-333 border-red" rounded outlined label="Xem bản đồ" />
    </div>
  );
}

export default Item;
