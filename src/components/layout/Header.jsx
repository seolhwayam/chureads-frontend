import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn ,onClick}) => {

  

  return (
    <header className="max-w-[572px] fixed top-0 left-0 right-0 mx-auto">
      <h1 className="py-2 text-center">
        <Link to="/" className="w-fit inline-block">
          <img src="./images/logo.svg" className="mx-auto h-16" alt="로고" />
        </Link>
      </h1>
      <div className="absolute top-1/2 tranform -translate-y-1/2 right-5 rounded-lg bg-white text-churead-black flex items-center px-2 text-sm">
        <button type="button" className="p-1" onClick={onClick}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </div>
    </header>
  );
};

  // 미션 이미 로그인된 사용자는 login페이지 접근 불가
  // home페이지로 리다이렉트 시키기


export default Header;
