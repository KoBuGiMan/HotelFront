import { useNavigate } from "react-router-dom";
import "../CSS/Admin.css";

function Admin() {
  const nav = useNavigate();

  const changeReservation = () => {
    nav("/admin/reservationLists");
  };

  const changeRoom = () => {
    nav("/admin/rooms");
  };

  const changeUser = () => {
    nav("/admin/users");
  };

  return (
    <div className="admin-body">
      <div className="admin-content-box">
        <div onClick={changeReservation} className="admin-content-box-object">
          <span className="admin-content-box-object-text">
            예약리스트
            <br /> ( 확인/수정/삭제 )
          </span>
        </div>
        <div onClick={changeRoom} className="admin-content-box-object">
          <span className="admin-content-box-object-text">
            잔여객실 확인
            <br />
            (날짜별 조회)
          </span>
        </div>
        <div onClick={changeUser} className="admin-content-box-object">
          <span className="admin-content-box-object-text">
            회원관리
            <br /> ( 확인/수정/삭제 )
          </span>
        </div>
      </div>
    </div>
  );
}
export default Admin;
