import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function DeluxeRoom() {
  const [changePage, setChangePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { unityProvider, isLoaded, unload } = useUnityContext({
    loaderUrl: "Deluxe/Deluxe.loader.js",
    dataUrl: "Deluxe/Deluxe.data",
    frameworkUrl: "Deluxe/Deluxe.framework.js",
    codeUrl: "Deluxe/Deluxe.wasm",
  });

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (changePage !== 3 && !isLoaded) {
      setLoading(true);
    }
  }, [changePage, isLoaded]);

  function changeP1() {
    setChangePage(1);
  }
  function changeP2() {
    setChangePage(2);
  }
  const changeP3 = async () => {
    if (isLoaded) {
      await unload();
      setLoading(true);
    }
    setChangePage(3);
  };
  return (
    <div className="content">
      <h1 className="content-title">DELUXE</h1>
      <div className="content-box">
        <img src="./images/deluxeBed.jpg" alt="bedRoom" />
      </div>
      <div className="li-list-select">
        <div onClick={changeP1} className="li-list-select-object">
          <span
            style={{ borderBottom: changePage === 1 ? "solid 3px black" : "" }}
            className="list-select-object-text"
          >
            객실내역
          </span>
        </div>
        <div onClick={changeP2} className="li-list-select-object">
          <span
            style={{ borderBottom: changePage === 2 ? "solid 3px black" : "" }}
            className="list-select-object-text"
          >
            배치품목
          </span>
        </div>
        <div onClick={changeP3} className="li-list-select-object">
          <span
            style={{ borderBottom: changePage === 3 ? "solid 3px black" : "" }}
            className="list-select-object-text"
          >
            시뮬레이터
          </span>
        </div>
      </div>

      {changePage === 1 ? (
        <div className="li-list">
          <div className="co-content-text">ROYAL HOTEL</div>
          <div className="co-content-text2">도심 속 작은 휴식터</div>
          <div className="bathroom">
            <img src="./images/deluxeBath.jpg" alt="bathroom" />
          </div>
          <span className="bathroom-text">
            <ul>
              <li>
                넓은 욕조와 고급스러운 레인 샤워기가 <br />
                설치된 화장실이 있습니다.{" "}
              </li>
              <li>
                고급 타일과 대리석 마감으로 품격 있는 <br /> 인테리어로
                되어있습니다.
              </li>
              <li>
                세면대와 큰 거울, 헤어드라이어 <br />
                완비되어 있습니다.
              </li>
              <li>추가 편의 용품이 제공됩니다.</li>
            </ul>
          </span>
          <div className="breakfast">
            <img
              className="breakfast-img"
              src="./images/breakfast.jpg"
              alt="breakfast"
            />
          </div>
          <span className="breakfast-text">
            {" "}
            <ul>
              <li>다양한 메뉴의 조식 뷔페 제공됩니다. </li>
              <li>
                신선한 과일, 다양한 베이커리, 치즈, 햄, 야채, <br />
                다양한 음료(커피, 차, 주스)가 포함됩니다.
              </li>
              <li>
                룸서비스 옵션 제공, 객실에서 편안하게 <br />
                식사가 가능합니다.
              </li>
              <li>
                레스토랑 공간은 세련된 인테리어와 편안한 <br />
                좌석으로 배치되었습니다.
              </li>
            </ul>
          </span>
          <div className="ob-object">
            <img
              className="ob-object-img"
              src="./images/object.jpg"
              alt="object"
            />
          </div>
          <span className="ob-object-text">
            <ul>
              <li>고급 세면도구 세트 제공됩니다.</li>
              <li>
                유명 브랜드 제품을 사용하고 피부에 자극이 <br />
                적고 향이 좋은 제품입니다.
              </li>
              <li>
                매일 새롭게 보충되며, 환경을 고려한 포장재를 <br /> 사용합니다.
              </li>
            </ul>
          </span>
        </div>
      ) : null}
      {changePage === 2 ? (
        <div className="ob-object-list">
          <div className="ob-object-list-banner">ROYAL HOTEL</div>
          <div className="ob-object-list-title">
            <div className="ob-object-list-title-text">배치 물품</div>
          </div>
          <table className="sh-shell" border={1}>
            <tr>
              <td rowSpan={2}>침대 구성</td>
              <td>킹 사이즈 침대 1개 </td>
            </tr>
            <tr>
              <td> 고급 침구류와 베개</td>
            </tr>
            <tr>
              <td>인터넷</td>
              <td>무료 와이파이</td>
            </tr>
            <tr>
              <td>최대인원</td>
              <td>2명 (추가 침대 요청 시 최대 3명 가능)</td>
            </tr>
            <tr>
              <td rowSpan={2}>기본 시설&품목</td>
              <td>에어컨, TV, 미니바, 책상과 의자</td>
            </tr>
            <tr>
              <td>커피&차 메이커, 안전 금고, 전화기</td>
            </tr>
            <tr>
              <td rowSpan={2}>욕실용품 및 시설</td>
              <td>개인 욕실, 샤워부스, 욕조</td>
            </tr>
            <tr>
              <td>
                고급 욕실용품(샴푸, 컨디셔너, 바디워시, 로션 등)
                <br />
                헤어드라이어, 목욕 가운, 슬리퍼, 수건 세트
              </td>
            </tr>
            <tr className="repast">
              <td>
                <p>조식</p>
              </td>
              <td>
                <p>운영 시간 : 07:00AM ~ 09:00AM</p>
                조식 뷔페: 다양한 빵, 과일, 계란 요리, 베이컨, 커피, 주스 등이
                있습니다. <br />
                컨티넨탈 조식: 간단한 빵, 커피, 주스, 시리얼 등이 있습니다.
                <br />
                룸서비스: 전날 선택한 메뉴를 객실로 배달해 드립니다.
              </td>
            </tr>
            <tr className="repast">
              <td>
                <p>중식</p>
              </td>
              <td>
                <p> 운영 시간 : 11:30AM ~ 13:30PM</p>
                호텔 레스토랑: 한식, 양식, 중식 등 다양한 메뉴 선택이
                가능합니다.
                <br />
                룸서비스: 샌드위치, 파스타, 스테이크 등 다양한 메뉴가 있습니다.
                <br />
                라운지/카페: 샌드위치, 샐러드, 스프 등 간단한 메뉴가 있습니다.
              </td>
            </tr>
            <tr className="repast">
              <td>
                <p>석식</p>
              </td>
              <td>
                <p>운영 시간 : 17:30PM ~ 19:30PM</p>
                호텔 레스토랑: 고급 저녁 메뉴, 다양한 국가 요리, 와인 및
                칵테일이 있습니다.
                <br />
                룸서비스: 스테이크, 해산물 요리, 피자 등 다양한 선택지가
                있습니다.
                <br />
                뷔페: 샐러드, 메인 요리, 디저트 등 다양한 요리가 있습니다.
              </td>
            </tr>
          </table>
        </div>
      ) : null}
      {changePage === 3 && (
        <div className="ob-object-list">
          <div className="ob-object-list-banner">ROYAL HOTEL</div>
          <div className="ob-object-list-title">
            <div className="ob-object-list-title-text">시뮬레이터</div>
          </div>
          {loading && <div className="loadeMassage">Loading...</div>}
          <Unity unityProvider={unityProvider} className="unitySize" />
          <div className="explanation">
            - 캐릭터 이동 : 방향키로 캐릭터를 이동할 수 있습니다.
          </div>
          <div className="explanation">
            - 캐릭터키는 175cm로 설정되있습니다.
          </div>
        </div>
      )}
    </div>
  );
}

export default DeluxeRoom;
