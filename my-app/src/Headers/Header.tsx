import React, { ReactNode } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logoimage from "../MainPage/MainImgs/amuse_logo.png";
import Concierge from "../Concierge/Concierge";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

function Header() {
  const movePage = useNavigate();
  const navigateToConcierge = () => {
    movePage("../Concierge");
  };
  const MenuItem = ({ children }: Props) => <div className="menu-item">{children}</div>;
  return (
    <div>
      <div className="top">
        <img className="logo" src={logoimage} alt="Amuse Travel Logo" />
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button className="searchBtn">Search</button>
        </div>
        <div className="whiteSquare"></div>
        <button className="loginBtn">로그인</button>
        <button className="signInBtn">회원가입</button>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={navigateToConcierge}>
          👨🏼‍🦯 컨시어지 여행
        </div>
        <MenuItem>👶🏻 아이돌봄 여행</MenuItem>
        <MenuItem>👴🏼 어르신돌봄 여행</MenuItem>
        <MenuItem>🖥 랜선 여행</MenuItem>
        <MenuItem> </MenuItem>
        <MenuItem>회사 소개</MenuItem>
      </div>
    </div>
  );
}

export default Header;
