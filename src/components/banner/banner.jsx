import { Galleria } from "primereact/galleria";
import React, { useState } from "react";
import "./style.css";
export default function Banner() {
  const [images, setImages] = useState([
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg",
      alt: "Description for Image 14",
      title: "Title 14",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg",
      alt: "Description for Image 15",
      title: "Title 15",
    },
  ]);

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%", display: "block" }} />;
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: "block" }} />;
  };
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];
  return (
    <div className="galleria relative">
      <div className="content absolute">
        <div className="text-name h-full flex justify-content-center align-items-center">
          <p className="font-family text-white">Huy Quang & Kim Dung</p>
          <p className="text-name text-white">22 October 2023</p>
        </div>
        <i className="pi pi-heart"></i>
      </div>
      <Galleria
        value={images}
        numVisible={5}
        circular
        style={{ height: "800px" }}
        responsiveOptions={responsiveOptions}
        showThumbnails={false}
        showItemNavigators
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        autoPlay
        transitionInterval={2000}
      />
      <div className="slice1"></div>
      <div className="slice2"></div>
    </div>
  );
}
