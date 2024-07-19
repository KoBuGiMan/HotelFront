import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    "./images/MainPageBackground.jpg",
    "./images/MaindeluxeBed.jpg",
    "./images/Mainroom.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 1000); // 0.5초 동안 fade-out
    }, 4500); // 5초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  const OnClick = () => {
    nav("/reservation");
  };
  return (
    <>
      <div
        className={`home ${fade ? "fade-in" : "fade-out"}`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="back">
          <div className="back-box-font">
            THE BEST PLACE <br />
            YOU'VE EVER RESCHED
          </div>
          <div onClick={OnClick} className="back-box">
            <span className="reservation-text">RESERVATION ROOM</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
