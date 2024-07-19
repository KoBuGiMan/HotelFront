import { useEffect, useState } from "react";
import "../CSS/MyPageInfo.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyPageInfo({ loginId }) {
  const [allUser, setAllUser] = useState(null);
  const [userKey, setUserKey] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userRole, setUserRole] = useState("");
  const nav = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const goHome = () => {
    nav("/");
  };

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((res) => res.json())
      .then((data) => {
        const user = data.find((user) => user.loginId === loginId);
        if (user) {
          setAllUser(user);
          setUserName(user.name);
          setUserId(user.loginId);
          setUserPw(user.password);
          setUserEmail(user.email);
          setUserPhone(user.phone);
          setUserKey(user.id);
          setUserRole(user.userRole);
        }
      });
  }, [loginId]);

  const updateUser = () => {
    axios
      .post(`${apiUrl}/users/create` /*"/users/create"*/, {
        id: userKey,
        loginId: userId,
        password: userPw,
        name: userName,
        email: userEmail,
        phone: userPhone,
        userRole: userRole,
      })
      .then((response) => {
        alert("데이터가 업데이트 되었습니다.");
        goHome();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeName = (e) => {
    setUserName(e.target.value);
  };
  const changeId = (e) => {
    setUserId(e.target.value);
  };
  const changePw = (e) => {
    setUserPw(e.target.value);
  };
  const changeEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const changePhone = (e) => {
    setUserPhone(e.target.value);
  };

  return (
    <div className="mypageinfo-body">
      <div className="mypageinfo-content">
        <div className="mypageinfo-content-line">
          <div className="mypageinfo-content-line-text">
            <span>이름</span>
          </div>
          <input
            className="mypageinfo-content-line-input"
            type="text"
            onChange={changeName}
            value={allUser ? userName : "Loading..."}
          />
        </div>
        <div className="mypageinfo-content-line">
          <div className="mypageinfo-content-line-text">
            <span>아이디</span>
          </div>
          <input
            onChange={changeId}
            className="mypageinfo-content-line-input"
            type="text"
            value={allUser ? userId : "Loading..."}
          />
        </div>
        <div className="mypageinfo-content-line">
          <div className="mypageinfo-content-line-text">
            <span>비밀번호</span>
          </div>
          <input
            onChange={changePw}
            className="mypageinfo-content-line-input"
            type="password"
            value={allUser ? userPw : "Loading..."}
          />
        </div>
        <div className="mypageinfo-content-line">
          <div className="mypageinfo-content-line-text">
            <span>이메일</span>
          </div>
          <input
            onChange={changeEmail}
            className="mypageinfo-content-line-input"
            type="text"
            value={allUser ? userEmail : "Loading..."}
          />
        </div>
        <div className="mypageinfo-content-line">
          <div className="mypageinfo-content-line-text">
            <span>전화번호</span>
          </div>
          <input
            onChange={changePhone}
            className="mypageinfo-content-line-input"
            type="number"
            value={allUser ? userPhone : "Loading..."}
          />
        </div>
        <div onClick={() => updateUser()} className="mypage-content-box-btn">
          <span className="mypage-content-box-btn-text">저장</span>
        </div>
      </div>
    </div>
  );
}

export default MyPageInfo;
