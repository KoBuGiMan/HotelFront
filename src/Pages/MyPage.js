import { useNavigate } from "react-router-dom";
import "../CSS/MyPage.css";

function MyPage() {
  const nav = useNavigate();

  const changePage = (e) => {
    nav(e);
  };

  return (
    <div className="mypage-body">
      <div className="mypage-content">
        <div
          className="mypage-content-box"
          onClick={() => changePage("/mypage/info")}
        >
          <span className="mypage-content-box-text">회원정보 수정</span>
        </div>
        <div
          onClick={() => changePage("/mypage/reservation")}
          className="mypage-content-box"
        >
          <span className="mypage-content-box-text">예약정보 확인</span>
        </div>
        <div
          onClick={() => changePage("/mypage/delete")}
          className="mypage-content-box"
        >
          <span className="mypage-content-box-text">회원탈퇴</span>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
