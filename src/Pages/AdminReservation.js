import { useEffect, useState } from "react";
import "../CSS/AdminReservation.css";
import axios from "axios";

function AdminReservation() {
  const [res, setRes] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const [nowResId, setNowResId] = useState("");
  const [nowResName, setNowResName] = useState("");
  const [nowResUserId, setNowResUserId] = useState("");
  const [nowResEmail, setNowResEmail] = useState("");
  const [nowResPhone, setNowResPhone] = useState("");
  const [nowResPostcode, setNowResPostcode] = useState("");
  const [nowResAdd, setNowResAdd] = useState("");
  const [nowResCar, setNowResCar] = useState();
  const [nowResRoomRole, setNowResRoomRole] = useState("");
  const [nowResRoomPrice, setNowResRoomPrice] = useState("");
  const [nowResAdult, setNowResAdult] = useState("");
  const [nowResChild, setNowResChild] = useState("");
  const [nowResBaby, setNowResBaby] = useState("");
  const [nowResRoomDay, setNowResRoomDay] = useState("");
  const [nowResStartDate, setNowResStartDate] = useState();
  const [nowResEndDate, setNowResEndDate] = useState();
  const [nowResPg, setNowResPg] = useState("");
  const [nowResPayMethod, setNowResPayMethod] = useState("");
  const [nowResUid, setNowResUid] = useState("");
  const [nowResPayName, setNowResPayName] = useState("");
  const [nowResResPrice, setNowResResPrice] = useState();
  const [resOpen, setResOpen] = useState(false);

  const choiceContent = (e) => {
    setNowResId(e.orderId);
    setNowResName(e.buyer_name);
    setNowResUserId(e.buyer_userId);
    setNowResEmail(e.buyer_email);
    setNowResPhone(e.buyer_tel);
    setNowResPostcode(e.buyer_postcode);
    setNowResAdd(e.buyer_addr);
    setNowResCar(e.buyer_car);
    setNowResRoomRole(e.buyer_reservation.room_role);
    setNowResRoomPrice(e.buyer_reservation.room_price);
    setNowResAdult(e.buyer_reservation.room_adult);
    setNowResChild(e.buyer_reservation.room_child);
    setNowResBaby(e.buyer_reservation.room_baby);
    setNowResRoomDay(e.buyer_reservation.room_day);
    setNowResStartDate(e.buyer_reservation.room_startDate);
    setNowResEndDate(e.buyer_reservation.room_endDate);
    setNowResPg(e.pg);
    setNowResPayMethod(e.pay_method);
    setNowResUid(e.merchant_uid);
    setNowResPayName(e.name);
    setNowResResPrice(e.buyer_reservation.room_resert_price);
    setResOpen(true);
  };

  const closeChange = () => {
    setResOpen(false);
  };

  useEffect(() => {
    fetch(`${apiUrl}/order`)
      // fetch("/order")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setRes(data);
      });
  }, []);

  const updateReservation = () => {
    let sumEx = Math.abs(
      new Date(nowResEndDate).getTime() - new Date(nowResStartDate).getTime()
    );
    sumEx = Math.ceil(sumEx / (1000 * 60 * 60 * 24));

    axios
      .post(`${apiUrl}/order` /*"/order"*/, {
        orderId: nowResId,
        pg: nowResPg,
        pay_method: nowResPayMethod,
        merchant_uid: nowResUid,
        name: nowResPayName,
        buyer_name: nowResName,
        buyer_tel: nowResPhone,
        buyer_email: nowResEmail,
        buyer_addr: nowResAdd,
        buyer_postcode: nowResPostcode,
        buyer_car: nowResCar,
        buyer_userId: nowResUserId,
        buyer_reservation: {
          room_role: nowResRoomRole,
          room_adult: nowResAdult,
          room_child: nowResChild,
          room_baby: nowResBaby,
          room_price: nowResRoomPrice,
          room_day: sumEx,
          room_resert_price: nowResResPrice,
          room_startDate: nowResStartDate,
          room_endDate: nowResEndDate,
        },
      })
      .then((response) => {
        alert("데이터가 업데이트 되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteReservation = () => {
    axios
      .delete(`${apiUrl}/order/${nowResId}` /*`/order/${nowResId}`*/)
      .then((response) => {
        alert("데이터가 삭제 되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeNowResName = (e) => {
    setNowResName(e.target.value);
  };
  const changeNowResEmail = (e) => {
    setNowResEmail(e.target.value);
  };
  const changeNowResPhone = (e) => {
    setNowResPhone(e.target.value);
  };
  const changeNowResCar = (e) => {
    setNowResCar(e.target.value);
  };
  const changeNowResAdult = (e) => {
    setNowResAdult(e.target.value);
  };
  const changeNowResChild = (e) => {
    setNowResChild(e.target.value);
  };
  const changeNowResBaby = (e) => {
    setNowResBaby(e.target.value);
  };
  const changeNowResRoomDay = (e) => {
    setNowResRoomDay(e.target.value);
  };
  const changeNowResStartDate = (e) => {
    setNowResStartDate(e.target.value);
  };
  const changeNowResEndDate = (e) => {
    setNowResEndDate(e.target.value);
  };

  return (
    <div className="adminReservation-body">
      <div className="adminReservation-box">
        <div className="adminReservation-box-title">
          <span className="adminReservation-box-title-text">예약 리스트</span>
        </div>
        <div className="adminReservation-box-area">
          {res.map((res) => (
            <div
              onClick={() => choiceContent(res)}
              className="adminReservation-box-area-content"
              key={`%{res.id}`}
            >
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  ID : {res.orderId}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Name : {res.buyer_name}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  UserID: {res.buyer_userId}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Email : {res.buyer_email}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Phone : {res.buyer_tel}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Postcode : {res.buyer_postcode}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Address : {res.buyer_addr}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Car : {res.buyer_car.toString()}
                </span>
              </div>

              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  roomRole : {res.buyer_reservation.room_role}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  roomPrice : {res.buyer_reservation.room_price}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Adult : {res.buyer_reservation.room_adult}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Child : {res.buyer_reservation.room_child}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  Baby : {res.buyer_reservation.room_baby}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  RoomDay : {res.buyer_reservation.room_day}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  RoomStartDay : {res.buyer_reservation.room_startDate}
                </span>
              </div>
              <div className="adminReservation-box-area-content-line">
                <span className="adminReservation-box-area-content-line-text">
                  RoomEndDay : {res.buyer_reservation.room_endDate}
                </span>
              </div>
            </div>
          ))}
        </div>
        {resOpen ? (
          <div className="adminReservation-box-input">
            <div
              onClick={closeChange}
              className="adminReservation-box-input-close"
            >
              <span className="adminReservation-box-input-close-text">X</span>
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResId}
                disabled
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResName}
                onChange={changeNowResName}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResUserId}
                disabled
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResEmail}
                onChange={changeNowResEmail}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="number"
                value={nowResPhone}
                onChange={changeNowResPhone}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResPostcode}
                disabled
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResAdd}
                disabled
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResCar}
                onChange={changeNowResCar}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResRoomRole}
                disabled
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResRoomPrice}
                disabled
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="number"
                value={nowResAdult}
                onChange={changeNowResAdult}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="number"
                value={nowResChild}
                onChange={changeNowResChild}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="number"
                value={nowResBaby}
                onChange={changeNowResBaby}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResRoomDay}
                onChange={changeNowResRoomDay}
                disabled
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResStartDate}
                onChange={changeNowResStartDate}
              />
            </div>
            <div className="adminReservation-box-input-line">
              <input
                className="adminReservation-box-input-line-text"
                type="text"
                value={nowResEndDate}
                onChange={changeNowResEndDate}
              />
            </div>
            <div
              onClick={() => updateReservation()}
              className="adminReservation-box-input-btn"
            >
              <span className="adminReservation-box-input-btn-text">수정</span>
            </div>
            <div
              onClick={() => deleteReservation()}
              className="adminReservation-box-input-btn"
            >
              <span className="adminReservation-box-input-btn-text">삭제</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default AdminReservation;
