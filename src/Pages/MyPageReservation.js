import { useEffect, useState } from "react";
import "../CSS/MyPageReservation.css";

function MyPageReservation({ loginId }) {
  const [myRes, setMyRes] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/order`)
      .then((res) => res.json())
      .then((data) => {
        const reservations = data.filter((res) => res.buyer_userId === loginId);
        setMyRes(reservations);
      });
  }, [loginId]);

  return (
    <div className="mypageReservation-body">
      <div className="mypageReservation-content">
        {myRes.length === 0 ? (
          <div>Loading...</div>
        ) : (
          myRes.map((res, index) => (
            <div className="mypageReservation-content-box" key={index}>
              <div className="mypageReservation-content-box-line">
                <div className="mypageReservation-content-box-line-title">
                  <span>숙박일자</span>
                </div>
                <div className="mypageReservation-content-box-line-text">
                  <span>
                    {res.buyer_reservation.room_startDate} ~{" "}
                    {res.buyer_reservation.room_endDate}
                  </span>
                </div>
              </div>
              <div className="mypageReservation-content-box-line">
                <div className="mypageReservation-content-box-line-title">
                  <span>예약자명</span>
                </div>
                <div className="mypageReservation-content-box-line-text">
                  <span>{res.buyer_name}</span>
                </div>
              </div>
              <div className="mypageReservation-content-box-line">
                <div>
                  <span className="mypageReservation-content-box-line-title">
                    전화번호
                  </span>
                </div>
                <div className="mypageReservation-content-box-line-text">
                  <span>{res.buyer_tel}</span>
                </div>
              </div>
              <div className="mypageReservation-content-box-line">
                <div className="mypageReservation-content-box-line-title">
                  <span>차량유무</span>
                </div>
                <div className="mypageReservation-content-box-line-text">
                  <span>
                    {res.buyer_car === true ? "차량 (O)" : "차량 (X)"}
                  </span>
                </div>
              </div>
              <div className="mypageReservation-content-box-line">
                <div className="mypageReservation-content-box-line-title">
                  <span>객실등급</span>
                </div>
                <div className="mypageReservation-content-box-line-text">
                  <span>{res.buyer_reservation.room_role}</span>
                </div>
              </div>
              <div className="mypageReservation-content-box-line">
                <div className="mypageReservation-content-box-line-title">
                  <span>인원</span>
                </div>
                <div className="mypageReservation-content-box-line-text">
                  <span>
                    어른 : {res.buyer_reservation.room_adult} | 어린이 :{" "}
                    {res.buyer_reservation.room_child} | 유아 :{" "}
                    {res.buyer_reservation.room_baby}
                  </span>
                </div>
              </div>

              <div className="mypageReservation-content-box-line">
                <div className="mypageReservation-content-box-line-title">
                  <span>총 가격</span>
                </div>
                <div className="mypageReservation-content-box-line-text">
                  <span>{res.buyer_reservation.room_resert_price} ₩</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyPageReservation;
