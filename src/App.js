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
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="grid">
        <Section
          className="col-6"
          urlImg="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg"
          name="Anh Tới"
          role="Chú rể Đẹp Trai :)))"
        />
        <Section
          className="col-6"
          urlImg="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg"
          name="Anh Tới"
          role="Cô dâu Xinh Gái :))))"
        />
      </div>
      <div className="more flex justify-content-evenly p-5" style={{ backgroundColor: "#ffe2e5" }}>
        <Button rounded severity="danger" label="GỬI LỜI CHÚC" icon="pi pi-comment" />
        <Button rounded severity="danger" label="XÁC NHẬN THAM DỰ" icon="pi pi-send" />
        <Button rounded severity="danger" label="MỪNG CƯỚI" icon="pi pi-dollar" />
      </div>
    </div>
  );
}

export default App;
