import React, { ReactNode } from "react";
import "./Header.css";
import logoimage from "../MainPage/MainImgs/amuse_logo.png";

interface Props {
  children: ReactNode;
}

const MenuItem = ({ children }: Props) => <div className="menu-item">{children}</div>;

function Header() {
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
        <MenuItem>👨🏼‍🦯 컨시어지 여행</MenuItem>
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
