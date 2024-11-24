import * as React from "react";
import { Link } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className="flex relative flex-wrap items-center px-5 mt-1.5 py-1.5 w-full text-[18px] font-semibold leading-none text-white bg-white/15 max-md:max-w-full">
      <div className="flex gap-3 items-center self-center py-1.5 my-auto">
        <Link to='/courses' className="gap-2.5 self-stretch my-auto">Trang chủ</Link>
      </div>
      <img loading="lazy" src="../Icon/navigate_next.svg" alt="Navigation arrow" className="object-contain shrink-0 pl-3 self-stretch my-auto aspect-square"/>
      <div className="flex gap-3 items-center self-center pl-3 py-1.5 my-auto">
        <Link className="gap-2.5 self-stretch my-auto">Data Analytics Certificate</Link>
      </div>
    </nav>
  );
}