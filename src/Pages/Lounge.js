import React from "react";
import "../CSS/Lounge.css";

function Lounge() {
  return (
    <div className="lounge-body">
      <div className="lounge-introduction">
        <h1>ROYAL HOTEL 라운지 소개</h1>
        <img src="../images/lounge.jpg" alt="lounge" />
        <div>
          <p>
            <li>
              저희 호텔의 라운지는 현대적이고 세련된 디자인으로 꾸며져 있으며,
              모든 고객에게 편안하고 고급스러운 휴식 공간을 제공합니다.
            </li>
            <li>
              {" "}
              다양한 편의 시설과 서비스를 통해 고객 여러분께 잊지 못할 경험을
              선사합니다.
            </li>
          </p>
          <hr />
          <br />
          <h2>주요 특징</h2>

          <ul>
            <img src="../images/LoungeAtmosphere.jpg" alt="lounge" />
            <li>
              {" "}
              <p>
                <strong style={{ marginLeft: 20 }}>아늑한 분위기</strong>
              </p>
              <ul>
                <li>
                  {" "}
                  호텔 라운지는 따뜻한 조명과 고급스러운 가구들로 꾸며져 있어,
                  마치 집과 같은 편안함을 느낄 수 있습니다.{" "}
                </li>
                <li>
                  {" "}
                  넓은 창문을 통해 들어오는 자연 채광과 함께, 계절에 따라
                  변화하는 아름다운 풍경을 감상할 수 있습니다.
                </li>
              </ul>
            </li>
            <hr />
            <br />
            <img src="../images/Loungebeverage.png" alt="lounge" />
            <li>
              <p>
                <strong style={{ marginLeft: 20 }}>다양한 음료</strong>
              </p>
              <ul>
                <li>
                  <strong>커피:</strong> 바리스타가 직접 준비하는 신선한 원두
                  커피, 에스프레소, 카푸치노, 라떼 등 다양한 커피 메뉴를 즐기실
                  수 있습니다.
                </li>
                <li>
                  <strong>차:</strong> 세계 각국의 다양한 차 종류를 구비하여,
                  고객의 취향에 맞는 차를 선택할 수 있습니다. 녹차, 홍차, 허브차
                  등 다양한 옵션이 준비되어 있습니다.
                </li>
                <li>
                  <strong>칵테일:</strong> 전문 바텐더가 만드는 클래식
                  칵테일부터 창의적인 칵테일까지 다양한 칵테일 메뉴를 제공하여,
                  저녁 시간의 즐거움을 더해줍니다.
                </li>
                <li>
                  <strong>주스 및 음료:</strong> 신선한 과일 주스와 무알콜
                  음료도 다양하게 준비되어 있습니다.
                </li>
              </ul>
            </li>
            <hr />
            <br />
            <img src="../images/Loungesnack.jpg" alt="lounge" />
            <li>
              <p>
                <strong style={{ marginLeft: 20 }}>고급 간식</strong>
              </p>
              <ul>
                <li>
                  <strong>베이커리:</strong> 매일 아침 신선하게 구워내는
                  크루아상, 머핀, 페이스트리 등 다양한 베이커리 제품을 제공하여,
                  아침이나 간식 시간에 즐기기 좋습니다.
                </li>
                <li>
                  <strong>디저트:</strong> 호텔 셰프가 직접 만든 고급 디저트와
                  케이크를 맛볼 수 있습니다. 초콜릿 케이크, 치즈케이크, 마카롱
                  등 다양한 옵션이 준비되어 있습니다.
                </li>
                <li>
                  <strong>간단한 식사:</strong> 라운지에서는 샌드위치, 샐러드,
                  수프 등 간단한 식사 메뉴도 제공하여, 가벼운 식사를 원하는
                  고객에게 적합합니다.
                </li>
              </ul>
            </li>
            <hr />
            <br />
          </ul>
          <table>
            <h2>운영 시간</h2>
            <p>
              평일: 오전 7시 - 오후 11시
              <br />
              주말 및 공휴일: 오전 8시 - 오후 12시
            </p>
            <h2>위치</h2>
            <p>
              호텔 1층 로비 옆에 위치해 있으며, 언제든지 편리하게 이용하실 수
              있습니다. <br /> 라운지 입구에는 친절한 직원이 상주하여, 고객의
              모든 문의 사항과 요청에 신속히 응대해 드립니다.
            </p>
            <p>
              저희 호텔 라운지에서 소중한 시간을 보내시며 특별한 추억을 만드시길
              바랍니다. 고객 여러분의 방문을 언제나 환영합니다.
            </p>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Lounge;
