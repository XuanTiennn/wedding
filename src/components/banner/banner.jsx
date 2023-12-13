import {Galleria} from "primereact/galleria";
import React, {useState} from "react";
import "./style.css";

export default function Banner() {
  const [images, setImages] = useState([
    {
      itemImageSrc: "anhbanner1.JPG",
      thumbnailImageSrc: "anhbanner1.JPG",
      alt: "Description for Image 13",
      title: "Title 1",
    },
    {
      itemImageSrc: "banner2.JPG",
      thumbnailImageSrc: "anhbanner1.JPG",

      title: "Title 14",
    },
    {
      itemImageSrc: "banner3.JPG",
      thumbnailImageSrc: "anhbanner1.JPG",
      alt: "Description for Image 15",
      title: "Title 15",
    },
  ]);

  const itemTemplate = (item) => {
    return <img src={`${process.env.PUBLIC_URL}/${item.itemImageSrc}`} alt={item.alt} style={{ width: "100%", display: "block" }} />;
  };

  const thumbnailTemplate = (item) => {
    return <img src={`${process.env.PUBLIC_URL}/${item.thumbnailImageSrc}`} style={{ display: "block" }} />;
  };
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  return (
    <div className="galleria relative">
      <div className="content absolute">
        <div className="text-name h-full flex justify-content-center align-items-center">
          <p className="font-family text-white">Anh Tới & Quỳnh Anh</p>
          <p className="text-name text-white">January 1, 2024</p>
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
