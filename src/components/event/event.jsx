import React from "react";
import PropTypes from "prop-types";
import Item from "./item";
import "./style.css"
Event.propTypes = {};

function Event(props) {
  return (
    <div className="event">
      <h2 className="font-family font-medium">Sự Kiện Cưới</h2>
      <div className="flex justify-content-center">
        <Item
          className="item-event mx-2"
          urlImg="https://cdn.biihappy.com/ziiweb/website/651039bb3becb356390964f6/20be262dc1d7da776f582b3d3a885be7.jpeg"
          title="BỮA TIỆC THÂN MẬT NHÀ GÁI"
          address="SN 13 , Thôn Châu Sơn , Quảng Trường , Quảng Xương , Thanh Hoá"
          time="11:30 AM 21/10/2023"
        />
        <Item
          className="item-event mx-2"
          urlImg="https://cdn.biihappy.com/ziiweb/website/651039bb3becb356390964f6/20be262dc1d7da776f582b3d3a885be7.jpeg"
          title="BỮA TIỆC THÂN MẬT NHÀ TRAI"
          address="SN 13 , Thôn Châu Sơn , Quảng Trường , Quảng Xương , Thanh Hoá"
          time="11:30 AM 21/10/2023"
        />
      </div>
    </div>
  );
}

export default Event;
