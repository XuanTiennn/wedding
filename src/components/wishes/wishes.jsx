import React from "react";
import "./style.css";

Wishes.propTypes = {};

function Wishes(props) {
    const backgroundUrl = `${process.env.PUBLIC_URL}/bg2.JPG`;
    const style = {
        background: `url(${backgroundUrl}) center center/cover no-repeat local`,
        padding: '120px 0',
    };
  return (
    <div className="mt-3" style={style}>
      <h3 className="text-white">
        Tình yêu là một cuộc hành trình dài . Hãy cùng nhau bắt tay vào cuộc phiêu lưu tuyệt đẹp này . I Love You ❤️❤️❤️
      </h3>
    </div>
  );
}

export default Wishes;
