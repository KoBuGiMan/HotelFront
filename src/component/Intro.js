import { useState } from "react";

function Intro() {
  return (
    <div className="intro-content">
      <h1 className="intro-content-title" style={{ marginLeft: 330 }}>
        로얄 호텔 소개
      </h1>
      <div className="intro-content-box" style={{ top: 20, marginLeft: 20 }}>
        <img src="./images/hotellobby.jpg" alt="about" />
      </div>
      <div className="object-text" style={{ top: 40, marginLeft: -380 }}>
        도심의 중심부에 이상적인 위치를 자랑하는 로얄호텔은 유명한 쇼핑가인
        명동과 서울역에서 <br />
        차로 단 10분 거리에 위치해, 비즈니스와 관광 모두 만족시킵니다.또 하나의
        자랑 호텔의 레스토랑은
        <br />
        다양한 메뉴와 고급 요리로 미각을 만족시킵니다.또한 고객님의 편안한
        휴식을 위해 최상의 편의 시설과
        <br />
        세심한 서비스를 제공합니다. 로얄 호텔은 세련된 디자인과 최상의 서비스로
        고객 여러분을 맞이합니다.
        <br />
        <br />
      </div>
      <div className="list">
        <h1 className="intro-title">객실</h1>
        <div className="intro">
          <img src="./images/roomimg.jpg" alt="intro" />
        </div>

        <div className="object-text" style={{ top: 30, marginLeft: -420 }}>
          모든 객실은 카펫으로 마감되어 있으며,산의 전망이 보이는 대형 창문을
          갖추고 있습니다. <br />
          객실 내 편의 시설로는 평면 TV와 Wi-Fi, 미니바, 커피 머신 등이 있으며,{" "}
          <br />
          고급 욕실 용품과 넉넉한 수납 공간을 제공합니다.
          <br />
          편안한 침대와 안락한 휴식 공간이 마련되어 있어 최상의 숙박 경험을
          보장합니다.
        </div>
      </div>
      <h1 className="row-title">수영장</h1>
      <div className="row">
        <img src="./images/infinityPool.jpg" alt="swim" />
        <div className="row-text">
          Infinity Pool, Private Pool, Jacuzzi Pool 3개의 테마로 이루어진
          수영장에서 <br />
          휴식과 럭셔리를 한 곳에서 만나보세요.각기 다른 매력의 풀과 특별한
          경험을 즐기실 수 있습니다.
        </div>
      </div>
      <h1 className="rest-title">레스토랑</h1>
      <div className="rest">
        <img src="./images/food.jpg" alt="restroom" />
        <div className="rest-text">
          로얄 호텔의 레스토랑은 다양한 메뉴와 최고급 요리로 미각을 만족시키는
          특별한 경험을 제공합니다.
          <br />
          품격 있는 분위기 속에서 세계 각국의 요리를 즐길 수 있으며, 전문 셰프의
          손길이 담긴 요리를 통해
          <br /> 고객님께 최상의 미식 경험을 선사합니다. 로얄 호텔의
          레스토랑에서 기억에 남을 만한 특별한 식사를 즐겨보세요.
        </div>
      </div>
      <h1 className="round-title">라운지</h1>
      <div className="round">
        <img src="./images/round.jpg" alt="rounded" />
        <div className="round-text">
          세련되고 모던한 호텔의 시그니처 공간 로비 라운지 & 바에서 세계적인
          설치 미술가 박선기 작가의 작품
          <br />
          'Column of Lights(빛의 기둥)'이 선사하는 눈부신 빛의 향연을
          만나보십시오.
          <br /> 고객님께 공중의 크리스털 정원에서 산책하는 듯한 환상적인 경험을
          선사합니다.
        </div>
      </div>
      <div style={{ position: "relative", top: 100, marginLeft: 10 }}>
        <div className="object-text">
          인기시설 및 서비스 <br />
        </div>
        <div className="object" style={{ marginLeft: 40 }}>
          <div>
            <div className="intro-content-img" />
            <span className=" intro-content-img-text">데스크</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="intro-content-img1" />
            <span className=" intro-content-img1-text">라운지</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="intro-content-img2" />
            <span className=" intro-content-img2-text">와이파이</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="intro-content-img3" />
            <span className=" intro-content-img3-text">주차장</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="intro-content-img4" />
            <span className=" intro-content-img4-text">레스토랑</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="intro-content-img5" />
            <span className=" intro-content-img5-text">수영장</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
