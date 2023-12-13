import React from "react";
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
          urlImg={`${process.env.PUBLIC_URL}/damcuoi1.JPG`}
          title="BỮA TIỆC THÂN MẬT NHÀ GÁI"
          address="Yên Hưng, Quảng Văn, Q.Xương, Thanh Hoá"
          time="06:30 AM 01/01/2024"
        />
        <Item
          className="item-event mx-2"
          urlImg={`${process.env.PUBLIC_URL}/damcuoi1.JPG`}
          title="BỮA TIỆC THÂN MẬT NHÀ TRAI"
          address="Thôn Hưng Nhượng, Vũ Hội, Vũ Thư, Thái Bình"
          time="11:30 AM 01/01/2024"
        />
      </div>
    </div>
  );
}

export default Event;
