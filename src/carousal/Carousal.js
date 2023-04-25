import React, { useRef, useState } from "react";
import img1 from '../images/2.jpg'
import img2 from '../images/3.jpg'
import img3 from '../images/4.jpg'


const Carousal = () => {
  const ref = useRef();

  const [count, setCount] = useState(1);
  const [image, setImage] = useState(`${img1}`);

  const images = [img1, img2, img3];

  const updateImage = ()=>{
    images.map((i,d) => {
        setImage(i);
      });
  }
console.log("images : ",image);
  const play = () => {
    ref.current = setInterval(() => {
        setCount((prev) => prev + 1);
        updateImage()      
    }, 1500);
  };

  const stop = () => {
    clearInterval(ref.current);
  };

  return (
    <div className="col-12">
      <div style={{ height: "60vh" }}>
        <span>count = {count}</span>
        <img
          src={`${image}`}
          alt= ""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ height: "35vh",marginTop:"50px" }}>
        <div style={{ display: "flex", height:"80%" }}>
          {images.map((img) => {
            return (
              <div style={{width:"100%", height:"90%"}}>
                <img
                  src={`${img}`}
                  alt="error"
                  style={{width:"100%",height:"100%"}}
                />
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            margin: "auto",
          }}
        >
          <button onClick={play}>Play</button>
          <button onClick={stop}>Stop</button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
