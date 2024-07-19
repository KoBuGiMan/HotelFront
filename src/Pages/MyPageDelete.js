import axios from "axios";
import "../CSS/MyPageDelete.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyPageDelete({ loginId, setIsLogin }) {
  const nav = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const deleteAfter = () => {
    nav("/");
  };
  const [deleteId, setDeleteId] = useState("");
  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((res) => res.json())
      .then((data) => {
        const user = data.find((user) => user.loginId === loginId);
        setDeleteId(user.id);
      });
  }, [loginId]);

  const deleteUser = () => {
    axios
      .delete(`${apiUrl}/users/${deleteId}` /*`/users/${deleteId}`*/)
      .then((response) => {
        setIsLogin(false);
        alert("계정이 삭제 되었습니다.");
        deleteAfter();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mypageDelete-body">
      <div className="mypageDelete-content">
        <div className="mypageDelete-content-textBox">
          <span className="mypageDelete-content-textBox-text">
            계정을 삭제할 시 일부 서비스 제공에 제약이 생깁니다.
          </span>
          <br />
          <br />
          <span className="mypageDelete-content-textBox-text">
            정말 삭제하시겠습니까?
          </span>
        </div>
        <div onClick={() => deleteUser()} className="mypageDelete-content-btn">
          <span className="mypageDelete-content-btn-text">삭제</span>
        </div>
      </div>
    </div>
  );
}
export default MyPageDelete;
