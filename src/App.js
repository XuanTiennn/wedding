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
          urlImg="https://sat02pap002files.storage.live.com/y4mCODa0n7yjacV8EaB3I3SSqbArFPMQwy5H6FoA3yq8NTd-D_x1lYTOsV47y-sO5ICLXqKKuxZu2cWYahH7VK9BOIBab8DCuYEHtxTe1e33tR6IaojoTNInw8cDDd4UfXHavZ68GstsnRWVOFA0i8sHQokXNWsomjTLK3rf6aO-mNrYVUh7d5UhjVL7USSupExQ59sX8dP97FY1NbyoS4h6wj9_QjMTN5q3XP5IejqPsI?encodeFailures=1&width=1071&height=1232"
          name="Anh Tới"
          role="Chú rể Đẹp Trai :)))"
        />
        <Section
          className="col-6 section"
          urlImg="https://sat02pap002files.storage.live.com/y4mEKudK7br1CJI-EBWIq9_mLSYcfyOZwTzV7FvhX8a4s8n5gN0fKv0x3ca6yRF-6zmQlh8qVxgtXKhrmEPXefA8SpuTF-0KuWbDxslpDVorN0Yj302OrpAHS1VgkEMPyiJfMsOFUXzCnWumjwJKdlhAlq0uxACjs3xT4eN8SDeA1q23634pU4nI0ESu92n7zfC3xxCqqm7nRizbDzD0MnQBl7rurpdYjydSc-AyHHiMF4?encodeFailures=1&width=1119&height=1232"
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
