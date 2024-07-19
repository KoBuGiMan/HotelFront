import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/AdminUsers.css";

function AdminUsers() {
  const [user, setUser] = useState([]);
  const [searchUserText, setSearchUserText] = useState("");
  const [searchUserList, setSearchUserList] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [nowName, setNowName] = useState("");
  const [nowLoginId, setNowLoginId] = useState("");
  const [nowEmail, setNowEmail] = useState("");
  const [nowPhone, setNowPhone] = useState("");
  const [nowId, setNowId] = useState("");
  const [nowUserRole, setNowUserRole] = useState("");
  const [nowPw, setNowPw] = useState("");
  const [open, setOpen] = useState(false);
  const [userNum, setUserNum] = useState(0);

  useEffect(() => {
    //fetch(`${apiUrl}/users`)
    fetch("/users")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setUser(data);
        setUserNum(data.length);
      });
  }, []);

  const updateUser = () => {
    axios
      .post(`${apiUrl}/users/create` /*"/users/create"*/, {
        id: nowId,
        loginId: nowLoginId,
        password: nowPw,
        name: nowName,
        email: nowEmail,
        phone: nowPhone,
        userRole: nowUserRole,
      })
      .then((response) => {
        alert("데이터가 업데이트 되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = () => {
    axios
      .delete(`${apiUrl}/users/${nowId}` /*`/users/${nowId}`*/, {})
      .then((response) => {
        alert("데이터가 삭제 되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchUserInfo = () => {
    const result = user.filter(
      (u) => u.loginId === searchUserText || u.name === searchUserText
    );
    setSearchUserList(result);
    result.length === 0 ? setUserNum(user.length) : setUserNum(result.length);
  };

  const changeText = (e) => {
    setSearchUserText(e.target.value);
  };

  const changeNowName = (e) => {
    setNowName(e.target.value);
  };
  const changeNowId = (e) => {
    setNowId(e.id);
    setNowName(e.name);
    setNowLoginId(e.loginId);
    setNowEmail(e.email);
    setNowPhone(e.phone);
    setNowUserRole(e.userRole);
    setNowPw(e.password);
    setOpen(true);
  };
  const changeNowLoginId = (e) => {
    setNowLoginId(e.target.value);
  };

  const changeNowEmail = (e) => {
    setNowEmail(e.target.value);
  };
  const changeNowPhone = (e) => {
    setNowPhone(e.target.value);
  };
  const changeNowPw = (e) => {
    setNowPw(e.target.value);
  };

  const closeWindow = () => {
    setOpen(false);
  };

  return (
    <div className="adminUser-body">
      <div className="adminUser-title">
        <span className="adminUser-title-text">유저 리스트</span>
      </div>

      <div className="adminUser-box">
        <div className="adminUser-search">
          <input
            className="adminUser-search-textarea"
            type="text"
            placeholder="이름 or 아이디"
            value={searchUserText}
            onChange={changeText}
          />
          <div
            onClick={() => searchUserInfo()}
            className="adminUser-search-btn"
          >
            <span className="adminUser-search-btn-text">검색</span>
          </div>
        </div>
        <div className="adminUser-length">
          <span className="adminUser-length-text">
            [ 총 계정 수 : {userNum}개 ]
          </span>
        </div>
        {searchUserList.length === 0
          ? user.map((user) => (
              <div className="adminUser-content-box">
                <div
                  onClick={() => {
                    changeNowId(user);
                  }}
                  className="adminUser-content"
                  key={`${user.id}`}
                >
                  <div className="adminUser-content-line">
                    <span>ID : {user.id}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Name : {user.name}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Login ID : {user.loginId}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>PW : {user.password}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Email : {user.email}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Phone : {user.phone}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Role : {user.userRole}</span>
                  </div>
                </div>
              </div>
            ))
          : searchUserList.map((user) => (
              <div className="adminUser-content-box">
                <div
                  onClick={() => {
                    changeNowId(user);
                  }}
                  className="adminUser-content"
                  key={`${user.id}`}
                >
                  <div className="adminUser-content-line">
                    <span>ID : {user.id}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Name : {user.name}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Login ID : {user.loginId}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>PW : {user.password}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Email : {user.email}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Phone : {user.phone}</span>
                  </div>
                  <div className="adminUser-content-line">
                    <span>Role : {user.userRole}</span>
                  </div>
                </div>
              </div>
            ))}
        {open ? (
          <div className="adminUser-content-info">
            <div onClick={closeWindow} className="adminUser-content-info-close">
              <span className="adminUser-content-info-close-text">X</span>
            </div>
            <div className="adminUser-content-info-box">
              <div className="adminUser-content-info-box-input">
                <input
                  className="adminUser-content-info-box-input-text"
                  type="text"
                  onChange={changeNowId}
                  placeholder={nowId}
                  value={nowId}
                  disabled
                />
              </div>
              <div className="adminUser-content-info-box-input">
                <input
                  className="adminUser-content-info-box-input-text"
                  type="text"
                  onChange={changeNowName}
                  placeholder={nowName}
                  value={nowName}
                />
              </div>
              <div className="adminUser-content-info-box-input">
                <input
                  className="adminUser-content-info-box-input-text"
                  type="text"
                  onChange={changeNowLoginId}
                  placeholder={nowLoginId}
                  value={nowLoginId}
                />
              </div>
              <div className="adminUser-content-info-box-input">
                <input
                  className="adminUser-content-info-box-input-text"
                  type="text"
                  onChange={changeNowPw}
                  placeholder={nowPw}
                  value={nowPw}
                />
              </div>
              <div className="adminUser-content-info-box-input">
                <input
                  className="adminUser-content-info-box-input-text"
                  type="text"
                  onChange={changeNowEmail}
                  placeholder={nowEmail}
                  value={nowEmail}
                />
              </div>
              <div className="adminUser-content-info-box-input">
                <input
                  className="adminUser-content-info-box-input-text"
                  type="text"
                  onChange={changeNowPhone}
                  placeholder={nowPhone}
                  value={nowPhone}
                />
              </div>
              <div className="adminUser-content-info-box-input">
                <input
                  className="adminUser-content-info-box-input-text"
                  type="text"
                  placeholder={nowUserRole}
                  value={nowUserRole}
                  disabled
                />
              </div>
            </div>
            <div
              onClick={() => updateUser()}
              className="adminUser-content-info-btn"
            >
              <span className="adminUser-content-info-btn-text">수정</span>
            </div>
            <div
              onClick={() => deleteUser()}
              className="adminUser-content-info-btn"
            >
              <span className="adminUser-content-info-btn-text">삭제</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminUsers;
