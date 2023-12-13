import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Section from "./components/section/section";
import {Button} from "primereact/button";
import SaveTheDate from "./components/save-the-date";
import Event from "./components/event/event";
import Wishes from "./components/wishes/wishes";
import {useEffect, useRef} from "react";
import ScrollAndPlayAudio from "./components/audio/ScrollAndPlayAudio";

function App() {
  const ref = useRef(null);
  // useEffect(() => {
  //   if (ref.current) {
  //       ref.current.play();
  //   }
  // }, []);
  // console.log(ref.current);
  return (
    <div className="App">
      <Banner />
      <Header />
      <div className="grid" style={{ backgroundColor: "#FEFEFE" }}>
        <Section
          className="col-6 section"
          urlImg="anhchure1.JPG"
          name="Anh Tới"
          role="Chú rể Đẹp Trai :)))"
        />
        <Section
          className="col-6 section"
          urlImg="anhcodau1.JPG"
          name="Quỳnh Anh"
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
        <ScrollAndPlayAudio />
    </div>
  );
}

export default App;
