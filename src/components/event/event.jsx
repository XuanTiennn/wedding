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
          urlImg="https://sat02pap002files.storage.live.com/y4mxY6upe4BgnubgnL9IadzHZlOGwnMFIdlUcsB8UHrZOhkl6tuwb2dxhgmuZDgWrWfLiFXOCx6ltK9iLLW_sPjXNbkRpNxQrtrG84M7leWHYRUy5HWUtuatV8_D-nusox8s84ZtO4QO24WXuhsrH8O86xw69YHZyY2WQIo79Gjvfvb6h9L8x5fdkpx0nXjsbT708a-SPsx7fKcNOJ1sa1dCuvS_kUXbW_7dawm3xf9GRA?encodeFailures=1&width=821&height=1232"
          title="BỮA TIỆC THÂN MẬT NHÀ GÁI"
          address="Yên Hưng, Quảng Văn, Quảng Xương, Thanh Hoá"
          time="06:30 AM 01/01/2024"
        />
        <Item
          className="item-event mx-2"
          urlImg="https://sat02pap002files.storage.live.com/y4mv6ogtdcuwdv3JaavGP4wzpk607dcLXvdRC-fBDNAKAb6DtFueWDmex7B4YNnXQgITYIdhlqg7HqbazCgWUoZgp8kK-yXrcnFPfIW4nHkl3wGEGGTgOVVsnnNJm3QQjbQewDlOPiVnrYr_leqFYLNafA26ZGPYePU4iCeJC3piGFiJm4HKMB2izCbR9N7-LDZT6LmDxob7WdcLmyod2eOEDv2xJfx-q-gCWvX3xJkjtM?encodeFailures=1&width=821&height=1232"
          title="BỮA TIỆC THÂN MẬT NHÀ TRAI"
          address="Thôn Hưng Nhượng, Vũ Hội, Vũ Thư, Thái Bình"
          time="11:30 AM 01/01/2024"
        />
      </div>
    </div>
  );
}

export default Event;
