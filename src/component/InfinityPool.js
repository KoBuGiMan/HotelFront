import { useState } from "react";

function InfinityPool() {

  return (
    <div className="content2">
      <h1 className="content2-title">인피니티 풀(InfinityPool)</h1>

      <div className="content2-box">
        <img src="./images/InfinityPool.jpg" alt="InfinityPool" />
        <div className="pools">
          <ul>
            <a>개요</a>
            <li>인피니티 풀은 수평선과 맞닿아 있는 것처럼 보이도록 설계된 수영장입니다. </li>
            <li>물이 끝없이 이어지는 착시 효과를 주어 매우 아름답고 독특한 경관을 제공합니다.</li>
          </ul>
          <br />
          <ul>
            <a>특징</a>
            <li>경관 : 자연 경관이나 도시의 스카이라인과 조화를 이루도록 설계되어 있습니다.</li>
            <li>구조 : 풀의 한쪽 끝이나 여러 쪽 끝이 경사져 있어 물이 넘쳐 흐르는 구조로 되어 있습니다. 넘친 물은 다시 수영장으로 재순환됩니다.</li>
            <li>장점 : 시각적인 아름다움과 독특한 경험을 제공합니다. 특히 일출이나 일몰 시에 더욱 멋진 풍경을 감상할 수 있습니다.</li>
            <li>예시 : 몰디브, 발리, 싱가포르 마리나 베이 샌즈 호텔의 인피니티 풀이 유명합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default InfinityPool;
