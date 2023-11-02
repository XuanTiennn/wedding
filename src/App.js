import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Section from "./components/section/section";
import { Button } from "primereact/button";
import SaveTheDate from "./components/save-the-date";
import Event from "./components/event/event";
import Wishes from "./components/wishes/wishes";
import { useEffect, useRef } from "react";
function App() {
  const ref = useRef();
  // useEffect(() => {
  //   if (ref.current) ref.current.play();
  // }, []);
  console.log(ref.current);
  return (
    <div className="App">
      <Banner />
      <Header />
      <div className="grid" style={{ backgroundColor: "#FEFEFE" }}>
        <Section
          className="col-6 section"
          urlImg="https://cdn.biihappy.com/ziiweb/website/651039bb3becb356390964f6/ec7e3fec0deb2d9faab05b4027930742.jpeg"
          name="Anh Tới"
          role="Chú rể Đẹp Trai :)))"
        />
        <Section
          className="col-6 section"
          urlImg="https://cdn.biihappy.com/ziiweb/website/651039bb3becb356390964f6/ec7e3fec0deb2d9faab05b4027930742.jpeg"
          name="Anh Tới"
          role="Cô dâu Xinh Gái :))))"
        />
      </div>
      <div className="more flex justify-content-evenly p-5" style={{ backgroundColor: "#ffe2e5" }}>
        <Button rounded severity="danger" label="GỬI LỜI CHÚC" icon="pi pi-comment" />
        <Button rounded severity="danger" label="XÁC NHẬN THAM DỰ" icon="pi pi-send" />
        <Button rounded severity="danger" label="MỪNG CƯỚI" icon="pi pi-dollar" />
      </div>
      <SaveTheDate />
      <Event />
      <Wishes />
      <audio
        controls
        ref={ref}
        src="https://cdn.biihappy.com/ziiweb/wedding-musics/TaLaCuaNhau-DongNhiOngCaoThang.mp3"
        autoPlay
      />
    </div>
  );
}

export default App;
