import { useState } from "react";

function JacuzziPool() {

  return (
    <div className="content2">
      <h1 className="content2-title">자쿠지 풀(JacuzziPool)</h1>

      <div className="content2-box">
        <img src="./images/JacuzziPool.jpg" alt="JacuzziPool" />
        <div className="pools">
          <ul>
            <a>개요</a>
            <li>자쿠지 풀은 물에 공기를 주입해 기포를 일으켜 마사지 효과를 제공하는 수영장입니다. </li>
            <li>온수로 운영되는 경우가 많아 휴식과 치유의 효과를 누릴 수 있습니다.</li>
          </ul>
          <br />
          <ul>
            <a>특징</a>
            <li>마사지 효과 : 물의 기포와 흐름이 근육을 풀어주고, 피로를 풀어줍니다.</li>
            <li>온수 : 대부분 따뜻한 물을 사용하여 몸을 편안하게 해줍니다.</li>
            <li>장점 : 스트레스 해소, 혈액 순환 개선, 근육 이완 등 건강에 도움이 됩니다.</li>
            <li>예시 : 호텔 스파, 헬스 클럽, 고급 리조트에 자주 설치되어 있으며, 일부 객실에 개인 자쿠지가 제공되기도 합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default JacuzziPool;
