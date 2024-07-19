import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function LuxuryRoom() {
  const [changePage, setChangePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { unityProvider, isLoaded, unload } = useUnityContext({
    loaderUrl: "Luxury/Luxury.loader.js",
    dataUrl: "Luxury/Luxury.data",
    frameworkUrl: "Luxury/Luxury.framework.js",
    codeUrl: "Luxury/Luxury.wasm",
  });

  useEffect(() => {
    if (isLoaded) {
      console.log("셋로딩");
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
      <h1 className="content-title">LUXURY</h1>
      <div className="content-box">
        <img src="./images/luxuryBed.jpg" alt="bedRoom" />
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
            <img src="./images/luxuryBath.jpg" alt="bathroom" />
          </div>
          <span className="bathroom-text">
            <ul>
              <li>
                최고급 욕조와 독립형 샤워 부스가 갖춰진 <br /> 화장실입니다.
              </li>
              <li>
                프리미엄 대리석과 세라믹 마감으로 고급스러운 <br /> 분위기
                연출됩니다.
              </li>
              <li>최고급 편의 용품이 제공됩니다.</li>
              <li>
                이중 세면대와 큰 거울, 헤어드라이어 및 고급
                <br /> 화장품 제공됩니다.
              </li>
              <li>바닥 난방 및 고급 욕실이 추가 제공됩니다.</li>
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
              <li>고급 레스토랑에서의 조식을 제공합니다.</li>
              <li>
                다양한 미식 경험 제공, 개인 셰프 서비스가 <br /> 가능합니다.
              </li>
              <li>
                룸서비스 포함, 객실에서 프리미엄 식사 <br /> 경험이 가능합니다.
              </li>
              <li>
                다양한 국제 요리 메뉴와 신선한 재료 사용, <br /> 맞춤형 요리
                서비스를 제공합니다.
              </li>
              <li>와인과 고급 음료 선택이 가능합니다.</li>
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
              <li>프리미엄 세면도구 세트 제공을 사용합니다.</li>
              <li>
                맞춤형 향 선택 가능, 고객의 취향에 맞춘 특별 <br /> 한
                제품입니다.
              </li>
              <li>
                유명 럭셔리 브랜드의 제품 사용, 피부와 모발 <br /> 에 최적화된
                성분입니다.
              </li>
              <li>
                매일 새롭게 보충되며, 환경 보호를 고려한 지속 <br /> 가능한
                제품을 사용했습니다.
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
              <td rowSpan={2}>침대구성</td>
              <td>킹 사이즈 침대 2개</td>
            </tr>
            <tr>
              <td>고릅 침구류와 베개</td>
            </tr>
            <tr>
              <td>인터넷</td>
              <td>무료 와이파이</td>
            </tr>
            <tr>
              <td>최대인원</td>
              <td>2명 (인원 요청시 추가 가능)</td>
            </tr>
            <tr>
              <td rowSpan={2}>기본 시설 및 품목</td>
              <td>
                에어컨, 스마트 TV, 미니바, 책상&의자, <br />
                개인 발코니&테라스(일부 객실)
              </td>
            </tr>
            <tr>
              <td>
                네스프레소 커피 머신, <br />
                안전 금고, 전화기
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>욕실용품 및 시설</td>
              <td>
                고급 욕실용품 (샴푸, 컨디셔너, 바디워시, 로션 등) <br />
                헤어드라이어, 목욕 가운&슬리퍼, 고급 수건 세트
              </td>
            </tr>
            <tr>
              <td>
                대리석 욕실, 샤워부스, 별도의 욕조,
                <br />
                쌍욕조, 레인 샤워기 (일부 객실)
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
                컨티넨탈 조식: 빵, 커피, 주스, 시리얼 등 간단한 메뉴가 있습니다.
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
                호텔 레스토랑: 한식, 양식, 중식 등 다양한 메뉴가 있습니다.
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
                호텔 레스토랑: 고급 요리, 다양한 국가 요리, 와인 및 칵테일이
                있습니다.
                <br />
                룸서비스: 스테이크, 해산물 요리, 피자 등 다양한 메뉴가 있습니다.
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

export default LuxuryRoom;
