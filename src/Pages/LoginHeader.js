import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

function LoginHeader({ loginId, userRole, setIsLogin }) {
  const logout = () => {
    setIsLogin(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown") && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("over", closeDropdown);
    return () => {
      window.removeEventListener("leave", closeDropdown);
    };
  }, [isDropdownOpen]);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="header-link">
          <img className="logo" src="./images/logo.png" alt="/" />
        </Link>
        <Link to="/reservation" className="link">
          예약
        </Link>
        <Link to="/about" className="link">
          호텔소개
        </Link>
        <Link to="/rooms" className="link">
          객실
        </Link>
        <div
          className="link"
          style={{ zIndex: "3" }}
          onMouseOver={toggleDropdown}
          onMouseOut={toggleDropdown}
        >
          <div className="dropdown">
            <span>내부시설</span>
            <div className="dropdown-content">
              <div className="dropdown-menu">
                <Link to="/restaurant" className="dropdown-link">
                  {" "}
                  <span> 식당</span>{" "}
                </Link>
                <Link to="/swims" className="dropdown-link">
                  {" "}
                  <span> 수영장</span>{" "}
                </Link>
                <Link to="/lounge" className="dropdown-link">
                  <span> 라운지</span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/enjoy" className="link">
          즐길거리
        </Link>
        {userRole === "ADMIN" ? (
          <Link to="/admin" className="link">
            ADMIN 님
          </Link>
        ) : (
          <Link to="/mypage" className="link">
            {loginId} 님
          </Link>
        )}
        <Link onClick={() => logout()} to="/" className="link">
          로그아웃
        </Link>
      </nav>
    </div>
  );
}

export default LoginHeader;
