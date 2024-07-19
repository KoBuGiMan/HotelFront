import { useState } from "react";

function Breakfasts() {
  const [changePage, setChangePage] = useState(1);

  function changeP1() {
    setChangePage(1);
  }
  function changeP2() {
    setChangePage(2);
  }

  return (
    <div className="restaurant-content">
      <h1 className="restaurant-content-title" style={{ marginLeft: 400 }}>
        restaurant
      </h1>
      <div className="restaurant-content-box" style={{ top: 20 }}>
        <img src="./images/restaurant.png" alt="restaurant" />
      </div>
      <div
        className="restaurant-object-text"
        style={{ top: 40, marginLeft: -390 }}
      >
        영국 데이비드 콜린스 스튜디오가 설계한 1950년대 미드센추리풍
        디자인으로공간 전체
        <br />
        가 럭셔리하고 감각적이다. 호텔 레스토랑의 벽면은 화이트톤으로 깔끔하고
        세련된 분위
        <br />
        기를 자아내며, 예술적인 패턴과 고풍스러운 장식이 어우러져 있다. 바닥은
        대리석으로 <br />
        되어 있어 한층 더 고급스러움을 더한다.조명은 섬세하게 배치되어 공간에
        따뜻함과
        <br />
        깊이를 더하고, 전체적인 분위기는 우아함과 편안함을 동시에 느낄 수 있게
        한다.{" "}
      </div>
      <div className="restaurant-list-select">
        <div onClick={changeP1} className="restaurant-list-select-object">
          <span
            style={{ borderBottom: changePage === 1 ? "solid 3px black" : "" }}
            className="restaurant-list-select-object-text"
          >
            {" "}
            뷔페{" "}
          </span>
        </div>
        <div onClick={changeP2} className="restaurant-list-select-object">
          <span
            style={{ borderBottom: changePage === 2 ? "solid 3px black" : "" }}
            className="restaurant-list-select-object-text2"
          >
            메뉴
          </span>
        </div>
      </div>

      {changePage === 1 ? (
        <div className="restaurant-list">
          <div className="restaurant-content-text">ROYAL HOTEL</div>
          <div className="restaurant-content-text2">
            프리미엄으로 시작하는 하루
          </div>
          <div className="restaurant-breakfast">
            <img
              src="./images/breakfast.png"
              style={{ top: 150, marginLeft: -350 }}
              alt="breakfast"
            />
          </div>
          <div
            className="restaurant-object-text"
            style={{ top: 180, marginLeft: -331 }}
          >
            샐러드 바 형태의 세미 뷔페에서 풀 뷔페로 변화하며 메뉴가 대폭
            보강되었습니다. <br></br>
            한식과 그릴 스테이션, 동남아시아, 유럽 음식 등이 풍성하게 준비되어
            있으며,
            <br></br>조식 필수 메뉴인 쌀국수와 에그 스테이션 역시 훌륭한
            퀄리티를 자랑하며 특히,<br></br>
            해물죽과 돼지 김치찌개, 불고기, 복분자 주스, 식혜 메뉴는 많은 인기가
            있습니다.{" "}
          </div>
          <div>
            <div
              className="restaurant-object"
              style={{ top: 220, marginLeft: 30 }}
            >
              <img
                className="restaurant-object-img"
                src="./images/object.jpg"
                alt="object"
              />
            </div>
            <div
              className="restaurant-object-text"
              style={{ top: 230, marginLeft: -100 }}
            >
              르미에르 '티 오마카세' <br></br> <br></br>{" "}
            </div>
            <div
              className="restaurant-object-text"
              style={{ top: 210, marginLeft: -330 }}
            >
              르미에르 '티 오마카세'는 차(茶)를 중심으로 한 특별한 다이닝 경험을
              <br></br> 선사하는 프리미엄 오마카세입니다.<br></br>
              정성스럽게 선택된 다양한 종류의 고급 차와 함께 제공되는 섬세한
              요리는 <br></br>당신의 오감을 자극할 것입니다. <br></br>
              차의 깊은 풍미를 느끼며, 차와 음식이 어우러지는 미각의 향연을
              경험해보세요.<br></br> 르미에르 '티 오마카세'는 당신의 차와 미식에
              대한 새로운 기준을 제시합니다.
              <br />
            </div>
            <div
              className="restaurant-object-text2"
              style={{ top: 230, marginLeft: -300 }}
            >
              ※르미에르 '티 오마카세'는 조식에만 제공하고 있습니다.
            </div>
          </div>{" "}
        </div>
      ) : null}
      {changePage === 2 ? (
        <div className="restaurant-object-list" style={{ top: 90 }}>
          <div className="restaurant-object-list-banner">ROYAL HOTEL</div>
          <div className="restaurant-object-list-title">
            <div className="restaurant-object-list-title-text">
              메뉴 및 이용 시간
            </div>
          </div>

          <table
            className="restaurant-shell"
            style={{ marginLeft: 150 }}
            border={1}
          >
            <tr>
              <td rowSpan={2}>
                에피타이저 & <br />
                수프
              </td>
              <td>
                피시 & 칩스 <br />
                시저 샐러드,
                <br /> 아보카도 샐러드,
                <br /> 모짜렐라 카프레제 샐러드
              </td>
            </tr>
            <tr>
              <td>
                오늘의 수프 <br />
                버섯 크림 수프 <br />
                해산물 수프 <br />
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                샐러드 & <br />
                샌드위치
              </td>
              <td>
                시저 샐러드,
                <br /> 아보카도 샐러드,
                <br /> 모짜렐라 카프레제 샐러드
              </td>
            </tr>
            <tr>
              <td>
                로얄 클럽 샌드위치, 불고기 슬라이더, <br />
                에그 스테이션
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                그릴& 파스타 <br />& 리조또{" "}
              </td>
              <td>
                양갈비 스테이크,
                <br /> 안심 스테이크,
                <br /> 등심 스테이크,
                <br /> 연어 스테이크 <br />
              </td>
            </tr>
            <tr>
              <td>
                해산물 토마토 스파게티,
                <br />
                봉골레 링귀니 파스타
                <br />
                까르보나라 링귀니 파스타
                <br />
                해산물 리조또{" "}
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                코리안 푸드 & <br />
                아시안 푸드{" "}
              </td>
              <td>
                La갈비구이, 불고기,
                <br /> 돼지 김치찌개,
                <br /> 해물 죽, 전복죽 <br /> 비빔밥, 해산물 볶음밥
              </td>
            </tr>
            <tr>
              <td>팟타이, 쌀국수</td>
            </tr>
            <tr>
              <td rowSpan={3}>
                키즈 메뉴 & <br /> 디저트 & <br /> 음료{" "}
              </td>
              <td>
                해산물 볶음밥 <br />
                뉴욕 치즈 케이크, <br /> 계절과일, 파블로바
              </td>
            </tr>
            <tr>
              <td>
                아이스크림, <br />
                뉴욕 치즈 케이크, <br /> 계절과일, <br /> 파블로바 <br />{" "}
                크로아상& 딸기쨈 <br /> 시리얼&요거트
              </td>
            </tr>
            <tr>
              <td>
                아메리카노 & 헤이즐넛 & 카라멜마끼아또, <br /> 복분자 주스 &
                식혜 & 수정과 & 매실 주스, <br /> 콜라&사이다
              </td>
            </tr>
            <tr>
              <td>최대인원</td>
              <td>4명</td>
            </tr>
            <tr>
              <td rowSpan={2}>운영시간 및 요금</td>
              <td>
                조식 07:00AM ~ 10:00AM <br />
                중식 12:30PM ~ 15:00PM <br />
                석식 18:00PM ~ 21:30PM{" "}
              </td>
            </tr>
            <tr>
              <td>
                성인: 50,000 <br></br>청소년:45,000<br></br>48개월 미만: 무료{" "}
              </td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default Breakfasts;
