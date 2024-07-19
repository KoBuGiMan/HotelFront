import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function StandardRoom() {
  const [changePage, setChangePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { unityProvider, isLoaded, unload } = useUnityContext({
    loaderUrl: "Standard/Standard.loader.js",
    dataUrl: "Standard/Standard.data",
    frameworkUrl: "Standard/Standard.framework.js",
    codeUrl: "Standard/Standard.wasm",
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
      <h1 className="content-title">STANDARD</h1>
      <div className="content-box">
        <img src="./images/standardBed.jpg" alt="bedRoom" />
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
            <img src="./images/standardBath.jpg" alt="bathroom" />
          </div>
          <span className="bathroom-text">
            <ul>
              <li>세면대와 거울, 기본 욕실 용품이 제공됩니다. </li>
              <li>매일 청소와 위생 관리가 철저히 이루어집니다.</li>
              <li>
                기본적인 욕조와 샤워 시설이 갖추어진 깔끔한
                <br /> 화장실입니다.{" "}
              </li>
              <li>
                조명이 잘 배치된 대형 거울과 충분한 수납 <br />
                공간이 마련되어 있어 화장과 개인 정비를 <br />
                편리하게 할 수 있습니다.
              </li>
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
            <ul>
              <li>
                아늑하고 세련된 레스토랑에서 제공되며,
                <br />
                다양한 뷔페 메뉴로 구성되어 있습니다.
              </li>
              <li>
                고급스러운 분위기속에서 편안하게 <br /> 식사를 즐길 수 있습니다.
              </li>
              <li>
                친절한 직원들이 상시 대기하여 신속하고 <br /> 만족스러운
                서비스를 제공합니다.{" "}
              </li>
              <li>
                객실에서 편안하게 조식을 즐기고자 하는 <br /> 고객님을 위해
                룸서비스도 제공되어 더욱 <br /> 편리한 아침 시간을 보낼 수
                있습니다.
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
              <li>
                객실 내에는 필수 세면도구가 준비되어 <br /> 있습니다.{" "}
              </li>
              <li>
                모든 제품은 피부에 자극이 적고 보습 효과가 <br /> 뛰어납니다.{" "}
              </li>
              <li>
                추가 도구도 제공되어 여행 중 필요한 모든 <br /> 세면용품을
                완벽하게 갖추고 있습니다.{" "}
              </li>
              <li>
                모든 세면도구는 위생적이고 편리하게 사용할 <br /> 수 있도록 개별
                포장되어 있습니다.
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
              <td rowSpan={3}>침대</td>
              <td>퀸사이즈 침대 1개</td>
            </tr>
            <tr>
              <td>베개, 이불, 시트</td>
            </tr>
            <tr>
              <td>여분의 담요</td>
            </tr>
            <tr>
              <td>인터넷</td>
              <td>무료 Wi-Fi 제공</td>
            </tr>
            <tr>
              <td>최대 인원</td>
              <td>일반적으로 2명 가능(추가 침대 요청 시 1명 추가 가능)</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                기본 시설
                <br />
                &품목
              </td>
              <td>
                전화기, 알람시계, 에어컨&난방 조절기, <br />
                미니바&소형 냉장고, 전기 주전자, 커피&차 메이커
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                책상&의자, 탁자,옷장&옷걸이, 금고, <br />
                다리미&다리미판, 슬리퍼&목욕 가운
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                욕실 용뭄
                <br />
                &시설
              </td>
              <td>샤워기&욕조, 세면대&거울, 변기</td>
            </tr>
            <tr>
              <td>
                {" "}
                샴푸, 린스, 바디워시, 비누, <br />
                수건, 타올, 헤어드라이어
              </td>
            </tr>
            <tr className="repast">
              <td>
                <p>조식</p>
              </td>
              <td>
                <p>운영 시간 : 07:00AM ~ 09:00AM</p>
                조식 뷔페 : 다양한 빵, 과일, 계란 요리, 베이컨, 커피, 주스 등이
                있습니다. <br />
                컨티넨탈 조식 : 간단한 빵, 커피, 주스, 시리얼 등이 있습니다.
                <br />
                룸서비스 : 전날 선택한 메뉴를 객실로 배달해 드립니다.
              </td>
            </tr>
            <tr className="repast">
              <td>
                <p>중식</p>
              </td>
              <td>
                <p> 운영 시간 : 11:30AM ~ 13:30PM</p>
                호텔 레스토랑 : 한식, 양식, 중식 등 다양한 메뉴 선택이
                가능합니다.
                <br />
                룸서비스 : 샌드위치, 파스타, 스테이크 등 다양한 메뉴가 있습니다.
                <br />
                라운지/카페 : 샌드위치, 샐러드, 스프 등 간단한 메뉴가 있습니다.
              </td>
            </tr>
            <tr className="repast">
              <td>
                <p>석식</p>
              </td>
              <td>
                <p>운영 시간 : 17:30PM ~ 19:30PM</p>
                호텔 레스토랑 : 고급 저녁 메뉴, 다양한 국가 요리, 와인 및
                칵테일이 있습니다.
                <br />
                룸서비스 : 스테이크, 해산물 요리, 피자 등 다양한 선택지가
                있습니다.
                <br />
                뷔페 : 샐러드, 메인 요리, 디저트 등 다양한 요리가 있습니다.
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
export default StandardRoom;
