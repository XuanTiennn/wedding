import { Galleria } from "primereact/galleria";
import React, { useState } from "react";
import "./style.css";
export default function Banner() {
  const [images, setImages] = useState([
    {
      itemImageSrc: "https://sat02pap002files.storage.live.com/y4mVY_tXbuWm4HpNi-uvujv-o43vYPMPO0pleZ99BaKbfu4BwkizMHANyqhitZzBaHlI5VP7qad9HXuAX3TGhpu6Y5yjXMBwCy4rO5cTgsK92pFjfnVk_eEadJHbGyJuGpUv9lxWP-ASlirQVOAT-jlZKJhKncKtVjIioR9EN7eHhSfPKABXkOr5AjDTLJ42J3lDE0Uf25L371ttGqK9FeWZWCv5gw9-ilwmEdDq_wTffM?encodeFailures=1&width=2464&height=1232",
      thumbnailImageSrc: "https://sat02pap002files.storage.live.com/y4mVY_tXbuWm4HpNi-uvujv-o43vYPMPO0pleZ99BaKbfu4BwkizMHANyqhitZzBaHlI5VP7qad9HXuAX3TGhpu6Y5yjXMBwCy4rO5cTgsK92pFjfnVk_eEadJHbGyJuGpUv9lxWP-ASlirQVOAT-jlZKJhKncKtVjIioR9EN7eHhSfPKABXkOr5AjDTLJ42J3lDE0Uf25L371ttGqK9FeWZWCv5gw9-ilwmEdDq_wTffM?encodeFailures=1&width=2464&height=1232",
      alt: "Description for Image 13",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://sat02pap002files.storage.live.com/y4muV7VFRn3HYD2zAu3V8HczAB5Tqh_wW2TV6u3lTtd-vvCDooNGcivOtR-wK5eTr2nvXwuDtI_ZeeAJ0aenPCQzA_grohmXmwfnBk_-4aqUP19b9HrCR-tqj-u-D9R9w3iyJ6NVhliEH5m5jv86cy2bn1gkb8hIPKeoKz884F6xBKO0EtC6phKkNMUFdyc8jY5vDsdLd3sc3pNpMw4QWrYNg5TzvKXogFOOz73glc0z3k?encodeFailures=1&width=2464&height=1232",
      thumbnailImageSrc: "https://sat02pap002files.storage.live.com/y4muV7VFRn3HYD2zAu3V8HczAB5Tqh_wW2TV6u3lTtd-vvCDooNGcivOtR-wK5eTr2nvXwuDtI_ZeeAJ0aenPCQzA_grohmXmwfnBk_-4aqUP19b9HrCR-tqj-u-D9R9w3iyJ6NVhliEH5m5jv86cy2bn1gkb8hIPKeoKz884F6xBKO0EtC6phKkNMUFdyc8jY5vDsdLd3sc3pNpMw4QWrYNg5TzvKXogFOOz73glc0z3k?encodeFailures=1&width=2464&height=1232",

      title: "Title 14",
    },
    {
      itemImageSrc: "https://sat02pap002files.storage.live.com/y4mvbDi-JxghHgkzIQA0xmJeDnNFfhv4E4YnB1Ebra1wvyX3PW8zXDXlf5fmmOC0fo5952O1wlfcFx9u2-PFerm80dNlEqN3Y4r3MJFqRDkJ7qJKg46P9HdG3ntjeeYVRjQQOUr9-1nrW9AQEAEWo0HHRvYl-ZDr0itpe67owIPpvM6ObEvgUXzW-THdrmN4qUTry5pFLwCOgkGT2fMuioxLEoNF6AsceFYuyzs8bURwTM?encodeFailures=1&width=2189&height=1232",
      thumbnailImageSrc: "https://sat02pap002files.storage.live.com/y4mvbDi-JxghHgkzIQA0xmJeDnNFfhv4E4YnB1Ebra1wvyX3PW8zXDXlf5fmmOC0fo5952O1wlfcFx9u2-PFerm80dNlEqN3Y4r3MJFqRDkJ7qJKg46P9HdG3ntjeeYVRjQQOUr9-1nrW9AQEAEWo0HHRvYl-ZDr0itpe67owIPpvM6ObEvgUXzW-THdrmN4qUTry5pFLwCOgkGT2fMuioxLEoNF6AsceFYuyzs8bURwTM?encodeFailures=1&width=2189&height=1232",
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
