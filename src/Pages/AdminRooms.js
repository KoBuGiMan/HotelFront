import "../CSS/AdminRooms.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import { addDays, addMonths } from "date-fns";

function AdminRooms() {
  const [allRoom, setAllRoom] = useState([]);
  const [nowStartDate, setNowStartDate] = useState(new Date());
  const [nowEndDate, setNowEndDate] = useState(new Date());
  const [nowStartOpen, setNowStartOpen] = useState(false);
  const [selectDateRoom, setSelectDateRoom] = useState([]);
  const [nowSum, setNowSum] = useState(1);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChangeStart = (e) => {
    setNowStartDate(e);
    setNowEndDate(e);
  };

  const handleChangeEnd = (e) => {
    setNowEndDate(e);
    dateSum(e);
  };

  const startOpen = () => {
    setNowStartOpen(!nowStartOpen);
  };

  const dateSum = (e) => {
    let sumEx = Math.abs(e.getTime() - nowStartDate.getTime());
    sumEx = Math.ceil(sumEx / (1000 * 60 * 60 * 24));
    setNowSum(sumEx + 1);
  };

  useEffect(() => {
    fetch(`${apiUrl}/roomList`)
      .then((res) => res.json())
      .then((data) => {
        setAllRoom(data);
      });
  }, []);

  const roomDateCheck = () => {
    setNowStartOpen(false);
    let selectedRooms = [];
    for (let i = 0; i < allRoom.length; i++) {
      for (let j = 0; j < nowSum; j++) {
        const newDate = addDays(nowStartDate, j);
        const formattedDate =
          newDate.getFullYear() +
          "-" +
          (newDate.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          newDate.getDate().toString().padStart(2, "0");

        if (allRoom[i].date === formattedDate) {
          selectedRooms.push(allRoom[i]);
          break;
        }
      }
    }
    setSelectDateRoom(selectedRooms);
  };

  registerLocale("ko", ko);

  return (
    <div className="adminRooms-body">
      <div className="adminRooms-date">
        <div className="adminRooms-date-box">
          <div onClick={startOpen} className="adminRooms-date-box-date">
            <span className="adminRooms-date-box-date-text">
              {nowStartDate.getFullYear()}년 {nowStartDate.getMonth() + 1}월{" "}
              {nowStartDate.getDate()}일
            </span>
          </div>
          <div onClick={startOpen} className="adminRooms-date-box-date">
            <span className="adminRooms-date-box-date-text">
              {nowEndDate.getFullYear()}년 {nowEndDate.getMonth() + 1}월{" "}
              {nowEndDate.getDate()}일
            </span>
          </div>
          <div
            onClick={() => {
              dateSum(nowEndDate);
              roomDateCheck();
            }}
            className="adminRooms-date-box-btn"
          >
            <span className="adminRooms-date-box-btn-text">검색</span>
          </div>
        </div>
      </div>
      <div className="adminRooms-date-box-calender1">
        {nowStartOpen && (
          <DatePicker
            className="datePick"
            onChange={handleChangeStart}
            dateFormat="yyyy-MM-dd"
            selected={nowStartDate}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 1)}
            locale="ko"
            inline
          />
        )}
      </div>
      <div className="adminRooms-date-box-calender2">
        {nowStartOpen && (
          <DatePicker
            onChange={handleChangeEnd}
            dateFormat="yyyy-MM-dd"
            selected={nowEndDate}
            minDate={nowStartDate}
            maxDate={addMonths(new Date(), 1)}
            locale="ko"
            inline
          />
        )}
      </div>

      <div className="adminRooms-list">
        {selectDateRoom.map((room, index) => (
          <div className="adminRooms-list-content" key={index}>
            <div className="adminRooms-list-content-line">
              <span className="adminRooms-list-content-line-date">
                {room.date}
              </span>
            </div>
            <hr />
            <div className="adminRooms-list-content-line">
              <span className="adminRooms-list-content-line-text">
                Room Role : {room.room[0].roomRole}
              </span>
            </div>
            <div className="adminRooms-list-content-line">
              <span className="adminRooms-list-content-line-text">
                Room Count : {room.room[0].roomCount}
              </span>
            </div>
            <hr />
            <div className="adminRooms-list-content-line">
              <span className="adminRooms-list-content-line-text">
                Room Role : {room.room[1].roomRole}
              </span>
            </div>
            <div className="adminRooms-list-content-line">
              <span className="adminRooms-list-content-line-text">
                Room Count : {room.room[1].roomCount}
              </span>
            </div>
            <hr />
            <div className="adminRooms-list-content-line">
              <span className="adminRooms-list-content-line-text">
                Room Role : {room.room[2].roomRole}
              </span>
            </div>
            <div className="adminRooms-list-content-line">
              <span className="adminRooms-list-content-line-text">
                Room Count : {room.room[2].roomCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminRooms;
