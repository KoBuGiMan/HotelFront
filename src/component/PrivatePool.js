import { useState } from "react";

function PrivatePool() {

  return (
    <div className="content2">
      <h1 className="content2-title">프라이빗 풀(PrivatePool)</h1>

      <div className="content2-box">
        <img src="./images/PrivatePool.jpg" alt="PrivatePool" />
        <div className="pools">
          <ul>
            <a>개요</a>
            <li>프라이빗 풀은 개별 객실이나 빌라에 딸려 있는 개인 수영장입니다.</li>
            <li>사용자가 독립적으로 사용할 수 있어 프라이버시가 보장됩니다.</li>
          </ul>
          <br />
          <ul>
            <a>특징</a>
            <li>프라이버시 : 다른 투숙객과 공유하지 않기 때문에 개인적인 시간을 보낼 수 있습니다.</li>
            <li>시설 : 종종 고급스러운 시설과 함께 제공되며, 개인 선베드, 파라솔 등도 함께 제공되는 경우가 많습니다.</li>
            <li>장점 : 가족, 커플, 친구들과 함께 프라이빗한 시간을 보낼 수 있으며, 소음 없이 휴식을 취할 수 있습니다.</li>
            <li>예시 : 고급 리조트나 빌라, 스위트룸 등에 주로 설치되어 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default PrivatePool;


// {/* <div className="list-select">
//         <div onClick={changeP1} className="list-select-object">
//           <span
//             style={{ borderBottom: changePage === 1 ? "solid 3px black" : "" }}
//             className="list-select-object-text"
//           >
//             수영장내역
//           </span>
//         </div>
//         <div onClick={changeP2} className="list-select-object">
//           <span
//             style={{ borderBottom: changePage === 2 ? "solid 3px black" : "" }}
//             className="list-select-object-text"
//           >
//             배치품목
//           </span>
//         </div>
//       </div> */}

// {/* {changePage === 1 ? (
//         <div className="list">
//           <div className="content-text">ROYAL HOTEL</div>
//           <div className="content-text2">도심 속 작은 휴식터</div>
//           <div className="bathroom">
//             <img src="./images/PlungePool.jpg" alt="bathroom" />
//           </div> */}
// {/* <span className="bathroom-text">
//             <ul>
//               <li>세면대와 거울, 기본 욕실 용품이 제공됩니다. </li>
//               <li>매일 청소와 위생 관리가 철저히 이루어집니다.</li>
//               <li>기본적인 욕조와 샤워 시설이 갖추어진 깔끔한<br />  화장실입니다. </li>
//               <li>조명이 잘 배치된 대형 거울과 충분한 수납 <br />공간이 마련되어 있어 화장과 개인 정비를   <br />편리하게 할 수 있습니다.</li>
//             </ul>
//           </span>
//           <div className="breakfast">
//             <img
//               className="breakfast-img"
//               src="./images/breakfast.jpg"
//               alt="breakfast"
//             />
//           </div>
//           <span className="breakfast-text">
//             <ul>
//               <li>아늑하고 세련된 레스토랑에서 제공되며,<br />
//                 다양한 뷔페 메뉴로 구성되어 있습니다.</li>
//               <li>고급스러운 분위기속에서 편안하게 <br /> 식사를 즐길 수 있습니다.</li>
//               <li>친절한 직원들이 상시 대기하여 신속하고 <br /> 만족스러운 서비스를 제공합니다. </li>
//               <li>객실에서 편안하게 조식을 즐기고자 하는  <br /> 고객님을 위해 룸서비스도
//                 제공되어 더욱  <br /> 편리한 아침 시간을 보낼 수 있습니다.</li> */}
// {/* <li>조식 시간은 오전 7시부터
//                 10시까지로, 여유로운 아침을 즐기기에 충분한 시간을 드립니다. </li> */}
// {/* </ul>
//           </span>
//           <div className="object">
//             <img
//               className="object-img"
//               src="./images/object.jpg"
//               alt="object"
//             />
//           </div>
//           <span className="object-text">
//             <ul>
//               <li>객실 내에는 필수 세면도구가 준비되어 <br /> 있습니다. </li>
//               <li>모든 제품은 피부에 자극이 적고 보습 효과가 <br />  뛰어납니다. </li>
//               <li>추가 도구도 제공되어 여행 중 필요한 모든 <br /> 세면용품을 완벽하게 갖추고 있습니다. </li>
//               <li>모든 세면도구는 위생적이고 편리하게 사용할 <br /> 수 있도록 개별 포장되어 있습니다.</li>
//             </ul>
//           </span>
//         </div>
//       ) : null}
//       {changePage === 2 ? (
//         <div className="object-list">
//           <div className="object-list-banner">ROYAL HOTEL</div>
//           <div className="object-list-title">
//             <div className="object-list-title-text">배치 물품</div>
//           </div>

//           <table className="shell" border={1}>
//             <tr>
//               <td>침대구성</td>
//               <td>퀸사이즈 침대 1개</td>
//             </tr>
//             <tr>
//               <td>인터넷</td>
//               <td>무료 와이파이</td>
//             </tr>
//             <tr>
//               <td rowSpan={2}>기본 시설 및 품목</td>
//               <td>
//                 TV, 테이블, 의자, <br />
//                 쇼파, 스타일러, 냉장고
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 헤어 드라이기, 고데기, <br />
//                 빗, 수건, 로션, 스킨, 왁스
//               </td>
//             </tr>
//             <tr>
//               <td rowSpan={2}>욕실용품 및 시설</td>
//               <td>
//                 샴푸, 컨디셔너, 바디워시, <br />
//                 치약, 칫솔, 목욕가운, 면도기
//               </td>
//             </tr>
//             <tr>
//               <td>욕조, 샤워기</td>
//             </tr>
//             <tr>
//               <td>최대인원</td>
//               <td>2명</td>
//             </tr>
//             <tr>
//               <td rowSpan={2}>조식</td>
//               <td>07:00AM ~ 09:00AM</td>
//             </tr>
//             <tr>
//               <td>1층 식당</td>
//             </tr>
//           </table>
//         </div>
//       ) : null} */}
// {/* </div>
//   );
// }
// export default PrivatePool; */}
