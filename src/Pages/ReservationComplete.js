import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/ReservationComplete.css";

const ReservationComplete = () => {
  const { state } = useLocation();
  const nav = useNavigate();

  const goHome = () => {
    nav("/");
  };
  return (
    <div className="complete-body">
      <div className="complete-answer-title">
        <span className="complete-answer-title-text">
          예약이 완료되었습니다
        </span>
      </div>
      <div className="complete-people-title">
        <span className="complete-people-title-text">예약자 정보</span>
      </div>
      <div className="complete-content">
        <span className="complete-content-text">
          - 아이디 : {state.buyer_userId}
        </span>
      </div>
      <div className="complete-content">
        <span className="complete-content-text">
          - 예약자 : {state.buyer_name}
        </span>
      </div>
      <div className="complete-content">
        <span className="complete-content-text">
          - 전화번호 : {state.buyer_tel}
        </span>
      </div>
      <div className="complete-content">
        <span className="complete-content-text">
          - 이메일 : {state.buyer_email}
        </span>
      </div>
      <div className="complete-content">
        <span className="complete-content-text">
          - 우편번호 : {state.buyer_postcode}
        </span>
      </div>
      <div className="complete-content">
        <span className="complete-content-text">
          - 주소 : {state.buyer_addr}
        </span>
      </div>
      <div className="complete-content">
        <span className="complete-content-text">
          - 차량유무 : {state.buyer_car ? "차량 (O)" : "차량 (X)"}
        </span>
      </div>
      <div>
        <div className="complete-room-title">
          <span className="complete-room-title-text">객실정보</span>
        </div>

        <div className="complete-content">
          <span className="complete-content-text">
            - 객실등급 : {state.buyer_reservation.room_role}
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 입실 : {state.buyer_reservation.room_startDate.getFullYear()}년{" "}
            {state.buyer_reservation.room_startDate.getMonth() + 1}월{" "}
            {state.buyer_reservation.room_startDate.getDate()}일
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 퇴실 : {state.buyer_reservation.room_endDate.getFullYear()}년{" "}
            {state.buyer_reservation.room_endDate.getMonth() + 1}월{" "}
            {state.buyer_reservation.room_endDate.getDate()}일
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 어른 : {state.buyer_reservation.room_adult}명
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 어린이 : {state.buyer_reservation.room_child}명
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 유아 : {state.buyer_reservation.room_baby}명
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 객실가격 : {state.buyer_reservation.room_price} ₩
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 숙박일수 : {state.buyer_reservation.room_day}
          </span>
        </div>
        <div className="complete-content">
          <span className="complete-content-text">
            - 총액 : {state.buyer_reservation.room_resert_price} ₩
          </span>
        </div>
      </div>
      <div className="complete-homebtn" onClick={goHome}>
        <span className="complete-homebtn-text">홈으로 가기</span>
      </div>
    </div>
  );
};
export default ReservationComplete;
