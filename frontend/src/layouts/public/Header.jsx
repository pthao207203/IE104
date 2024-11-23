import React, { useState } from 'react';
import { Link } from "react-router-dom";



export default function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header className="flex relative flex-wrap gap-2.5 items-center px-[60px] w-full leading-none text-white bg-white/10 max-sm:px-5 max-md:max-w-full">

      <div className="flex gap-3 items-center self-stretch p-3 my-auto text-6xl uppercase font-['Squada One'] whitespace-nowrap">
        <h1 className="gap-2.5 self-stretch my-auto max-md:text-4xl" >Distenda</h1>
      </div>

      <nav className="flex flex-wrap flex-1 shrink gap-[30px] justify-end self-stretch items-center my-auto text-xl max-md:text-lg font-semibold text-center max-md:max-w-full ">
        <Link to='/' className="flex gap-3 items-center self-stretch px-3 py-5 my-auto">
          Về chúng tôi
        </Link>
        <Link to="/login" className="flex gap-3 justify-center items-center self-stretch px-3 py-3.5 my-auto text-black bg-[#CFF500]">
          Đăng nhập
        </Link>
        <Link to="/register" className="flex gap-3 items-center self-stretch px-3 py-5 my-auto">
          Đăng ký
        </Link>
        <Link href="/help" className="flex gap-3 items-center self-stretch px-3 py-5 my-auto">
          Trợ giúp
        </Link>
      </nav>
    </header>
  );
}